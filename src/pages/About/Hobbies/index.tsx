import { FaDumbbell, FaBook, FaUtensils, FaPlane } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './Hobbies.scss'

const Hobbies = () => {
  const { t } = useTranslation('global')

  const hobbiesList = [
    { id: '1', icon: FaDumbbell },
    { id: '2', icon: FaBook },
    { id: '3', icon: FaUtensils },
    { id: '4', icon: FaPlane },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="hobbies">
      <div className="hobbies__header">
        <h2 className="hobbies__sub">Hobbies</h2>
        <p className="hobbies__subtitle">{t('aboutpage.hobbies.sub')}</p>
      </div>

      <motion.div
        className="hobbies__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {hobbiesList.map((hobby) => {
          const Icon = hobby.icon
          return (
            <motion.div key={hobby.id} className="hobbies__card" variants={itemVariants}>
              <div className="hobbies__card-icon">
                <Icon />
              </div>
              <h4 className="hobbies__card-title">
                {t(`aboutpage.hobbies.${hobby.id}.label`).replace(':', '')}
              </h4>
              <p className="hobbies__card-text">{t(`aboutpage.hobbies.${hobby.id}.value`)}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Hobbies
