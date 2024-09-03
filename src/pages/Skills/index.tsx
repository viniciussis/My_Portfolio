import Certificates from './Certificates'
import SoftSkills from './SoftSkills'
import Stack from './Stack'
import './Skills.scss'

const Skills = () => {
  return (
    <div className="skills">
      <Stack />
      <SoftSkills />
      <Certificates />
    </div>
  )
}

export default Skills
