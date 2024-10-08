import { useTranslation } from 'react-i18next'
import './Footer.scss'

const Footer = () => {
  const { t } = useTranslation('global')

  return (
    <footer className="footer">
      <div className="footer__divider" />
      <p className="footer__para">
        &copy; {t('footer.para')} {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
