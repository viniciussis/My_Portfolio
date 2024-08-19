import { hiddenTransition } from '@/shared/animations/motionVariants'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeBtn from './ThemeBtn'
import LangBtn from './LangBtn'
import './Actions.scss'

const Actions = () => {
  const location = useLocation()

  return (
    <motion.div
      variants={hiddenTransition}
      initial={location.pathname === '/' ? 'hidden' : false}
      animate={location.pathname === '/' ? 'shown' : false}
      className="actions"
    >
      <LangBtn />
      <ThemeBtn />
    </motion.div>
  )
}

export default Actions
