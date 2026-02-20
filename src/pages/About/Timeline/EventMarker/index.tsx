import { motion } from 'framer-motion'
import './EventMarker.scss'
import { springSlideInLeft, springSlideInRight, popIn } from '@/shared/animations'

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
    <div className={`eventMarker eventMarker--${position}`}>
      <motion.div
        className="eventMarker__dot"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={popIn}
      />
      <motion.div
        className="eventMarker__card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={position === 'left' ? springSlideInLeft : springSlideInRight}
      >
        <div className="eventMarker__content">
          <h2 className="eventMarker__content__title">{title}</h2>
          <h3 className="eventMarker__content__sub">{subtitle}</h3>
          <p className="eventMarker__content__para">{description}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default EventMarker
