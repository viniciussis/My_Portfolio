import { useTranslation } from 'react-i18next'
import './Certificates.scss'
import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'

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
    <div className="certificates">
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
    </div>
  )
}

export default Certificates
