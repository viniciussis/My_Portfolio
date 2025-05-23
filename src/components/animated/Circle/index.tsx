import { motion } from 'framer-motion'

import { circleRotation } from '@/shared/animations'
import './Circle.scss'

interface AnimatedCircleProps {
  label: string
}

const AnimatedCircle = ({ label }: AnimatedCircleProps) => {
  return (
    <div className="circle">
      <motion.div
        variants={circleRotation}
        animate="animate"
        exit="exit"
        className="circle__border"
      />
      <span className="circle__label">{label}</span>
    </div>
  )
}

export default AnimatedCircle
