import logoLight from '../../images/others/apple-touch-icon-light.png'
import logoDark from '../../images/others/apple-touch-icon.png'
import useTheme from '@/context/useTheme'
import './Header.scss'
import Menu from './Menu'

const Header = () => {
  const { theme } = useTheme()

  return (
    <header className="header">
      <Menu />
      <img
        src={theme == 'light' ? logoLight : logoDark}
        width={45}
        height={45}
        alt="logo"
      />
    </header>
  )
}

export default Header
