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
              demo={project.deploy}
              repo={project.github}
              title={project.name}
              key={project.id}
              stacks={project.stacks}
            ></ProjectCard>
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects
