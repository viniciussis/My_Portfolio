import { motion } from 'framer-motion'
import './EventMarker.scss'
import { timeline } from '@/shared/animations'

interface EventMarkerProps {
  title: string
  subtitle: string
  description: string
  position?: 'right' | 'left'
}

const EventMarker = ({
  title,
  subtitle,
  description,
  position = 'left',
}: EventMarkerProps) => {
  return (
    <motion.div
      className={`eventMarker ${position == 'left' ? 'eventMarker--left' : ''}`}
      initial={`hidden${position}`}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={timeline}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="eventMarker__content">
        <h2 className="eventMarker__content__title">{title}</h2>
        <h3 className="eventMarker__content__sub">{subtitle}</h3>
        <p className="eventMarker__content__para">{description}</p>
      </div>
    </motion.div>
  )
}

export default EventMarker
