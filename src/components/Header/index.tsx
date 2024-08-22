import useTheme from '@/context/useTheme'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import './Header.scss'

const Header = () => {
  const { theme } = useTheme()

  return (
    <header className="header">
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
      <MenuMobile />
      <MenuDesktop />
    </header>
  )
}

export default Header
