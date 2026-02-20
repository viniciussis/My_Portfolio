import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Footer.scss'

const Footer = () => {
  const { t } = useTranslation('global')
  const location = useLocation()
  const currentYear = new Date().getFullYear()

  const isHome = location.pathname === '/'

  return (
    <motion.footer
      className={`footer ${isHome ? 'footer--simple' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="footer__divider" />

      {!isHome && (
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__name">Vinícius Silva Santos</h3>
            <p className="footer__tagline">Full Stack Developer</p>
          </div>

          <div className="footer__socials">
            <a href="https://github.com/viniciussis" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub className="footer__icon" />
            </a>
            <a href="https://www.linkedin.com/in/viniciussis/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="footer__icon" />
            </a>
            <a href="https://www.instagram.com/_devinicius/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram className="footer__icon" />
            </a>
            <a href="https://twitter.com/_devinicius" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <FaXTwitter className="footer__icon" />
            </a>
            <a href="mailto:vinicius01012@gmail.com" aria-label="Email">
              <FaEnvelope className="footer__icon" />
            </a>
          </div>
        </div>
      )}

      <div className="footer__bottom">
        <p className="footer__para">
          &copy; {currentYear} | {t('footer.para').replace('|', '').trim()}
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
