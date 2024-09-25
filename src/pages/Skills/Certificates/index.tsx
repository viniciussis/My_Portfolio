import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import ImageCard from '@/components/ImageCard'
import './Certificates.scss'

const Certificates = () => {
  const images = Array.from(
    { length: 24 },
    (_, i) => `images/certificates/${i + 1}.png`,
  )
  const { t } = useTranslation('global')

  return (
    <div className="certificates">
      <h2 className="sub">{t('skillsPage.certificates.subtitle')}</h2>
      <motion.section className="certificates__slider">
        {[...images, ...images].map((image, index) => (
          <ImageCard image={image} key={index} />
        ))}
      </motion.section>
    </div>
  )
}

export default Certificates
