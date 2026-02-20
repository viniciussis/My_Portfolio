import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './MenuDesktop.scss'

const MenuDesktop = () => {
  const { t } = useTranslation('global')
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  return (
    <div className="menuDesktop">
      <Link
        className={`menuDesktop__link ${isActive('/about') ? 'menuDesktop__link--active' : ''
          }`}
        to="/about"
      >
        {t('headerMenu.1')}
      </Link>
      <Link
        className={`menuDesktop__link ${isActive('/skills') ? 'menuDesktop__link--active' : ''
          }`}
        to="/skills"
      >
        {t('headerMenu.2')}
      </Link>
      <Link
        className={`menuDesktop__link ${isActive('/projects') ? 'menuDesktop__link--active' : ''
          }`}
        to="/projects"
      >
        {t('headerMenu.3')}
      </Link>
      <Link
        className={`menuDesktop__link ${isActive('/contact') ? 'menuDesktop__link--active' : ''
          }`}
        to="/contact"
      >
        {t('headerMenu.4')}
      </Link>
    </div>
  )
}

export default MenuDesktop
