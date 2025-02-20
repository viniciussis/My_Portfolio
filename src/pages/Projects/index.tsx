import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'

import AnimatedIconButton from '@/components/animated/IconButton'
import { useProjectsQuery } from '@/hooks/api/useProjectsQuery'
import Loading from '@/components/Loading'
import ProjectCard from './ProjectCard'
import './Projects.scss'

const Projects = () => {
  const { data, isLoading } = useProjectsQuery()
  const { t } = useTranslation('global')

  return (
    <main className="projects">
      <h1 className="projects__title">{t('headerMenu.3')}</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="projects__container">
          {data?.map((project) => (
            <ProjectCard
              img={`https://raw.githubusercontent.com/viniciussis/${project.name}/${project.branch}/public/screenshot.png`}
              description={project.description}
              topics={project.topics}
              repo={project.github}
              demo={project.demo}
              name={project.name}
              key={project.id}
            ></ProjectCard>
          ))}
        </div>
      )}
      {!isLoading && (
        <div className="projects__more">
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
        </div>
      )}
    </main>
  )
}

export default Projects
