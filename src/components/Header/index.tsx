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
            ? 'images/common/logo-white.png'
            : 'images/common/logo-dark.png'
        }
        className="header__logo"
        alt="logo"
      />
    </header>
  )
}

export default Header
