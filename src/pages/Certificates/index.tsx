import { useTranslation } from 'react-i18next'
import './Certificates.scss'
import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import { pageTransition } from '@/shared/animations/motionVariants'

const Certificates = () => {
  const images = Array.from({ length: 24 }, (_, i) => i + 1)
  const { t } = useTranslation('global')

  const isSmallScreen = useMediaQuery('(max-width:1024px)')
  const isMediumScreen = useMediaQuery('(max-width:1880px)')

  let cols = 3
  if (isSmallScreen) {
    cols = 1
  } else if (isMediumScreen) {
    cols = 2
  }

  return (
    <motion.div
      variants={pageTransition}
      animate="onScreen"
      exit="offScreen"
      initial="outScreen"
      className="certificates"
    >
      <h1 className="certificates__title">{t('headerMenu.2')}</h1>
      <ImageList
        sx={{ maxHeight: '75vh' }}
        className="certificates__container"
        rowHeight={'auto'}
        variant="quilted"
        cols={cols}
      >
        {images.map((image) => (
          <ImageListItem key={image}>
            <img
              className="certificates__container__item"
              srcSet={`images/certificates/${image}.png`}
              src={`images/certificates/${image}.png`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </motion.div>
  )
}

export default Certificates
