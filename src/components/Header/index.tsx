import logoLight from '../../images/others/apple-touch-icon-light.png'
import './Header.scss'

const Header = () => {
  return (
    <header className={`menu 'menu--light'}`}>
      <img
        className="menu__logo"
        src={logoLight}
        width={45}
        height={45}
        alt="logo"
      />
    </header>
  )
}

export default Header
