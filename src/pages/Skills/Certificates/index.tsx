import { useTranslation } from 'react-i18next'
import { motion, useAnimation } from 'framer-motion'

import { carrouselSlide } from '@/shared/animations'
import ImageCard from '@/components/ImageCard'
import { useEffect } from 'react'
import './Certificates.scss'

const Certificates = () => {
  const images = Array.from(
    { length: 24 },
    (_, i) => `images/certificates/${i + 1}.png`,
  )
  const controls = useAnimation()
  const { t } = useTranslation('global')

  useEffect(() => {
    controls.start('animate')
  }, [controls])

  return (
    <>
      <h2 className="sub">{t('skillsPage.certificates.subtitle')}</h2>
      <motion.section
        className="certificates"
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => controls.start('animate')}
      >
        <motion.div
          className="certificates__slider"
          variants={carrouselSlide}
          animate={controls}
          initial="initial"
        >
          {images.map((image, index) => (
            <ImageCard image={image} key={index} />
          ))}
          {images.map((image, index) => (
            <ImageCard image={image} key={index} />
          ))}
        </motion.div>
      </motion.section>
    </>
  )
}

export default Certificates
