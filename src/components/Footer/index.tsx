import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './Footer.scss'

const Footer = () => {
  const { t } = useTranslation('global')

  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="footer__divider" />

      <div className="footer__content">
        <div className="footer__brand">
          <h3 className="footer__name">Vinícius Silva Santos</h3>
          <p className="footer__tagline">Full Stack Developer</p>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/viniciussis" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub className="footer__icon" />
          </a>
          <a href="https://linkedin.com/in/viniciussilva-ba" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="footer__icon" />
          </a>
          <a href="mailto:contato.viniciussilva.ba@gmail.com" aria-label="Email">
            <FaEnvelope className="footer__icon" />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__para">
          &copy; {currentYear} | {t('footer.para').replace('|', '').trim()}
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
