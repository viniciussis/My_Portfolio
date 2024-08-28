import { useProjectsQuery } from '@/hooks/api/useProjectsQuery'
import { useTranslation } from 'react-i18next'
import Loading from '@/components/Loading'
import ProjectCard from './ProjectCard'
import './Projects.scss'

const Projects = () => {
  const { data, isLoading } = useProjectsQuery()
  const { t } = useTranslation('global')

  return (
    <main className="projects">
      <h1 className="projects__title">{t('headerMenu.1')}</h1>
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
    </main>
  )
}

export default Projects
