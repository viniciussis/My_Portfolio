import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './Myself.scss'

const Myself = () => {
  const { t } = useTranslation('global')

  return (
    <section className="myself">
      <h3 className="myself__sub">{t('aboutpage.greetings.sub')}</h3>

      <div className="myself__content">
        <motion.img
          className="myself__photo"
          src="images/common/profile.jpg"
          alt="profile"
          aria-hidden="true"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        />

        <motion.div
          className="myself__text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <p key={item} className="myself__para">
              {t(`aboutpage.greetings.paras.${item}`)}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Myself
