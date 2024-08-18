import { motion } from 'framer-motion'
import ThemeBtn from './ThemeBtn'
import LangBtn from './LangBtn'
import './Actions.scss'

const Actions = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
      className="actions"
    >
      <LangBtn />
      <ThemeBtn />
    </motion.div>
  )
}

export default Actions
