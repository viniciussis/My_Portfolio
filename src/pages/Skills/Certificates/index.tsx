import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './Certificates.scss'

const Certificates = () => {
  const images = Array.from(
    { length: 24 },
    (_, i) => `images/certificates/${i + 1}.png`,
  )
  const { t } = useTranslation('global')
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="skills__block">
      <h2 className="sub">{t('skillsPage.certificates.title')}</h2>
      <section className="certificates">
        <div className="certificates__grid">
          {images.map((img) => {
            const isActive = activeId === img
            return (
              <motion.div
                key={img}
                className={`certificates__thumb ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveId(img)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => setActiveId(isActive ? null : img)}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              >
                <img src={img} alt="Certificate" loading="lazy" />
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Certificates
