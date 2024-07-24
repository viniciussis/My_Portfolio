import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Project from '@/components/Project'
import './Projects.scss'

const Projects = () => {
  return (
    <div className={`projects projects--light`}>
      <h1 className="projects__title">Projetos</h1>
      <div className="projects__container">
        <FaArrowLeft size={28} style={{ cursor: 'pointer' }} />
        <Project />
        <FaArrowRight size={28} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  )
}

export default Projects
