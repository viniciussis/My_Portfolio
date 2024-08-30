import { useState } from 'react'
import './ImageCard.scss'
import { AnimatePresence, motion } from 'framer-motion'

interface ImageCardProps {
  image: string
}

const ImageCard = ({ image }: ImageCardProps) => {
  const [showOverlay, setShowOverlay] = useState(false)
  return (
    <motion.div
      className="card"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="card__container"
          >
            <div className="card__container__overlay" />
          </motion.div>
        )}
      </AnimatePresence>
      <img className="card__image" src={image} alt={image} />
    </motion.div>
  )
}

export default ImageCard
