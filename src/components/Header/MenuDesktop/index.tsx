import { Link } from 'react-router-dom'
import './MenuDesktop.scss'
import { useTranslation } from 'react-i18next'

const MenuDesktop = () => {
  const { t } = useTranslation('global')

  return (
    <div className="menuDesktop">
      <Link className="menuDesktop__link" to="/">
        Home
      </Link>
      <Link className="menuDesktop__link" to="/projects">
        {t('headerMenu.1')}
      </Link>
      <Link className="menuDesktop__link" to="/certificates">
        {t('headerMenu.2')}
      </Link>
      <Link className="menuDesktop__link" to="/contact">
        {t('headerMenu.3')}
      </Link>
    </div>
  )
}

export default MenuDesktop
