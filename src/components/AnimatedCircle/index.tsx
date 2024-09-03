import { motion } from 'framer-motion'
import './AnimatedCircle.scss'
import { circleRotation } from '@/shared/animations'

interface AnimatedCircleProps {
  label: string
}

const AnimatedCircle = ({ label }: AnimatedCircleProps) => {
  return (
    <div className="circle">
      <motion.div
        variants={circleRotation}
        animate="animate"
        whileHover="taping"
        exit="exit"
        className="circle__border"
      />
      <span className="circle__label">{label}</span>
    </div>
  )
}

export default AnimatedCircle
