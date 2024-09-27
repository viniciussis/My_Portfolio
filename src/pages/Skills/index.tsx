import Certificates from './Certificates'
import SoftSkills from './SoftSkills'
import Stack from './Stack'
import './Skills.scss'
import { AnimatePresence } from 'framer-motion'

const Skills = () => {
  return (
    <main className="skills">
      <AnimatePresence mode="wait">
        <Stack />
        <SoftSkills />
        <Certificates />
      </AnimatePresence>
    </main>
  )
}

export default Skills
