import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './SoftSkills.scss'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 150
    }
  }
}

const SoftSkills = () => {
  const softskills = Array.from({ length: 10 }, (_, i) => `${i + 1}`)
  const { t } = useTranslation('global')

  return (
    <div className="skills__block">
      <h2 className="sub">{t('skillsPage.softskills.title')}</h2>
      <section className="softSkills">
        <h3 className="softSkills__sub">
          {t('skillsPage.softskills.subtitle')}
        </h3>
        <motion.div
          className="softSkills__container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {softskills.map((softskill, index) => (
            <motion.div
              className="softSkills__badge"
              key={index}
              variants={badgeVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {t(`skillsPage.softskills.${softskill}`)}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default SoftSkills
