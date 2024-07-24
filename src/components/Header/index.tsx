import useTheme from '@/context/useTheme'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import './Header.scss'

const Header = () => {
  const { theme } = useTheme()

  return (
    <header className="header">
      <MenuMobile />
      <MenuDesktop />
      <img
        src={
          theme == 'light'
            ? 'images/common/logo-sm-light.png'
            : 'images/common/logo-sm-dark.png'
        }
        className="header__logo"
        alt="logo"
      />
      <img
        src={
          theme == 'light'
            ? 'images/common/logo-lg-light.png'
            : 'images/common/logo-lg-dark.png'
        }
        className="header__logo--lg"
        alt="logo"
      />
    </header>
  )
}

export default Header
