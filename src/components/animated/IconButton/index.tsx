import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

import { iconAnimation } from '@/shared/animations'
import './IconButton.scss'

interface AnimatedIconButtonProps {
  icon: IconType
  href: string
  size?: number
}

const AnimatedIconButton = ({
  icon: Icon,
  href,
  size = 32,
}: AnimatedIconButtonProps) => {
  return (
    <motion.a
      style={{ fontSize: `${size}px` }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="animated__icon__button"
      variants={iconAnimation}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <Icon size={size} />
    </motion.a>
  )
}

export default AnimatedIconButton
