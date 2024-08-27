import { useTranslation } from 'react-i18next'
import { TiThMenu } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './MenuMobile.scss'

const MenuMobile = () => {
  const [dropdown, setDropdown] = useState(false)
  const { t } = useTranslation('global')

  return (
    <div className="menuMobile">
      <span
        className="menuMobile__dropbutton"
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        onClick={() => setDropdown(dropdown == true ? false : true)}
      >
        <TiThMenu size={36} />
      </span>
      {dropdown && (
        <nav
          className="menuMobile__dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <Link
            onClick={() => setDropdown(false)}
            className="menuMobile__dropdown__link"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setDropdown(false)}
            className="menuMobile__dropdown__link"
            to="/projects"
          >
            {t('headerMenu.1')}
          </Link>
          <Link
            onClick={() => setDropdown(false)}
            className="menuMobile__dropdown__link"
            to="/certificates"
          >
            {t('headerMenu.2')}
          </Link>
          <Link
            onClick={() => setDropdown(false)}
            className="menuMobile__dropdown__link"
            to="/contact"
          >
            {t('headerMenu.3')}
          </Link>
          <Link
            onClick={() => setDropdown(false)}
            className="menuMobile__dropdown__link"
            to="/about"
          >
            {t('headerMenu.4')}
          </Link>
        </nav>
      )}
    </div>
  )
}

export default MenuMobile
