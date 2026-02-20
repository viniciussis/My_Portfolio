import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaFlask, FaStar, FaLayerGroup, FaExclamationTriangle } from 'react-icons/fa'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

import AnimatedIconButton from '@/components/animated/IconButton'
import { useProjectsQuery } from '@/hooks/api/useProjectsQuery'
import Loading from '@/components/Loading'
import ProjectCard from './ProjectCard'
import './Projects.scss'

const Projects = () => {
  const { data, isLoading } = useProjectsQuery()
  const { t } = useTranslation('global')
  // Changed to array for multi-select
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const [isLabOpen, setIsLabOpen] = useState(false)

  // Extract all unique topics for the filter
  const allTechs = useMemo(() => {
    if (!Array.isArray(data)) return []
    const techs = new Set<string>()
    data.forEach((p) => p.topics?.forEach((topic) => techs.add(topic)))
    return Array.from(techs).sort()
  }, [data])

  // Filter and Categorize Projects
  const { featured, standard, drafts } = useMemo(() => {
    if (!Array.isArray(data)) return { featured: [], standard: [], drafts: [] }

    let filtered = data
    // tailored filter logic: If tags selected, show projects having AT LEAST ONE of them.
    if (selectedTechs.length > 0) {
      filtered = data.filter((p) =>
        p.topics?.some((t) => selectedTechs.includes(t))
      )
    }

    return {
      featured: filtered.filter((p) => p.isFeatured && !p.isDraft),
      standard: filtered.filter((p) => !p.isFeatured && !p.isDraft),
      drafts: filtered.filter((p) => p.isDraft),
    }
  }, [data, selectedTechs])

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  if (isLoading) return <Loading />

  if (!Array.isArray(data)) {
    return (
      <main className="projects projects--error-state">
        <div className="projects__error">
          <FaExclamationTriangle size={48} className="projects__error-icon" />
          <h2 className="projects__error-title">{t('projectPage.errorTitle')}</h2>
          <p className="projects__error-text">{t('projectPage.errorText')}</p>
          <div className="projects__error-tip">
            <p><strong>Dica / Tip:</strong><br />{t('projectPage.errorTip')}</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="projects">
      <h1 className="projects__title">{t('headerMenu.3')}</h1>

      <>
        {/* Filters */}
        <div className="projects__filters">
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`projects__filter-chip ${selectedTechs.includes(tech) ? 'projects__filter-chip--active' : ''}`}
              onClick={() => toggleTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <LayoutGroup>
          {/* Featured Section */}
          <AnimatePresence>
            {featured.length > 0 && (
              <motion.section className="projects__section">
                <h2 className="projects__section-title">
                  <FaStar color="#FFD700" /> {t('projectPage.spotlight')}
                </h2>
                <motion.div
                  className="projects__grid projects__grid--featured"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  layout
                >
                  {featured.map((project) => (
                    <motion.div key={project.id} variants={itemVariants} layout>
                      <ProjectCard
                        img={project.image!}
                        description={project.description}
                        topics={project.topics}
                        repo={project.github}
                        demo={project.demo}
                        name={project.name}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* Standard Section */}
          <AnimatePresence>
            {standard.length > 0 && (
              <motion.section className="projects__section">
                <h2 className="projects__section-title">
                  <FaLayerGroup /> {t('headerMenu.3')}
                </h2>
                <motion.div
                  className="projects__grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  layout
                >
                  {standard.map((project) => (
                    <motion.div key={project.id} variants={itemVariants} layout>
                      <ProjectCard
                        img={project.image!}
                        description={project.description}
                        topics={project.topics}
                        repo={project.github}
                        demo={project.demo}
                        name={project.name}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* The Lab (Drafts) */}
          {drafts.length > 0 && (
            <motion.section
              className="projects__section projects__lab"
              layout
            >
              <div
                className="projects__lab-header"
                onClick={() => setIsLabOpen(!isLabOpen)}
              >
                <h2 className="projects__section-title" style={{ margin: 0 }}>
                  <FaFlask /> {t('projectPage.labTitle')}
                </h2>
                <span>{isLabOpen ? '▼' : '▶'}</span>
              </div>

              <AnimatePresence>
                {isLabOpen && (
                  <motion.div
                    className="projects__grid"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginTop: '2rem', overflow: 'hidden' }}
                  >
                    {drafts.map((project) => (
                      <ProjectCard
                        key={project.id}
                        img={project.image!}
                        description={project.description}
                        topics={project.topics}
                        repo={project.github}
                        demo={project.demo}
                        name={project.name}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          )}
        </LayoutGroup>

        <motion.div
          className="projects__more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="projects__more__text">
            {t('projectPage.moreProjects')}
          </p>
          <p className="projects__more__link">
            {t('projectPage.viewOn')}{' '}
            <span className="projects__more__link__highlight">
              {t('projectPage.github')}
            </span>
          </p>
          <AnimatedIconButton
            icon={FaGithub}
            href="https://github.com/viniciussis?tab=repositories"
          />
        </motion.div>
      </>
    </main>
  )
}

export default Projects
