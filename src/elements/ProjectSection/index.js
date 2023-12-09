import './ProjectSection.css'
import Project from '../Project/index'
import firstProject from '../../images/icon_01.jpg'

const ProjectSection = () => {
  return(
    <div className='projectSection'>
      <div>
        <Project image={firstProject} name='first project' />
      </div>
    </div>
  )
}

export default ProjectSection