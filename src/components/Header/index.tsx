import useTheme from '@/context/useTheme'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import Actions from '../Actions'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  const { theme } = useTheme()

  return (
    <header className="header">
      <Link to="/">
        <img
          src={
            theme == 'light'
              ? 'images/brand/brand-sm-light.png'
              : 'images/brand/brand-sm-dark.png'
          }
          className="header__logo"
          alt="logo"
        />
        <img
          src={
            theme == 'light'
              ? 'images/brand/brand-md-light.png'
              : 'images/brand/brand-md-dark.png'
          }
          className="header__logo--md"
          alt="logo"
        />
      </Link>
      <MenuDesktop />
      <Actions />
      <MenuMobile />
    </header>
  )
}

export default Header
