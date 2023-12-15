import './ProjectSection.css'
import Project from '../Project/index'
import firstProject from '../../images/icon_01.jpg'

const ProjectSection = () => {
  return(
    <div className='projectsSection'>
      <div className='conteinerProject'>
        <Project image={firstProject} name='first project' />
      </div>
    </div>
  )
}

export default ProjectSection