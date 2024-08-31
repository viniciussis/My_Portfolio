import { useState } from 'react'
import './ImageCard.scss'
import { AnimatePresence, motion } from 'framer-motion'

interface ImageCardProps {
  image: string
}

const ImageCard = ({ image }: ImageCardProps) => {
  const [showOverlay, setShowOverlay] = useState(true)
  return (
    <motion.div
      className="card"
      onHoverStart={() => setShowOverlay(false)}
      onHoverEnd={() => setShowOverlay(true)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="card__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
