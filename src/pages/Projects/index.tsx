import { useProjectsQuery } from '@/hooks/api/useProjectsQuery'
import Loading from '@/components/Loading'
import ProjectCard from './ProjectCard'
import './Projects.scss'

const Projects = () => {
  const { data, isLoading } = useProjectsQuery()

  return (
    <div className="projects">
      <h1 className="projects__title">Projetos</h1>
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
    </div>
  )
}

export default Projects
