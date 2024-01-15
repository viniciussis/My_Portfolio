import './Header.css';
import { useTheme } from '../../context/ThemeContext';
import logoDark from '../../images/others/apple-touch-icon.png';
import logoLight from '../../images/others/apple-touch-icon-light.png';
import Menu from '../Menu';
import DropMenu from '../DropMenu';

const Header = ({windowSize}) => {
  const { isDarkMode } = useTheme();

  return (
    <header className={`menu ${isDarkMode ? '' : 'menu--light'}`}>
      {windowSize >= 1020
        ?<Menu />
        :<DropMenu />
      } 
      <img className='menu__logo' src={isDarkMode ? logoDark : logoLight} width={45} height={45} alt="logo" />
    </header>
  )
}

export default Header