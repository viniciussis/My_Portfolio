import './Header.css';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import logoDark from '../../images/others/apple-touch-icon.png';
import logoLight from '../../images/others/apple-touch-icon-light.png';
import Links from '../Links';

const Header = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <header className={`menu ${isDarkMode ? '' : 'menu--light'}`}>
      <nav className='menu__navbar'>
        <Links to='/'>Home</Links>
        <Links to="/projects">{language === 'pt' ? 'Projetos' : 'Projects'}</Links>
        <Links to="/certificates">{language === 'pt' ? 'Certificados' : 'Certificates'}</Links>
        <Links to="/contact">{language === 'pt' ? 'Contact' : 'Contato'}</Links>
      </nav>
      <img className='menu__logo' src={isDarkMode ? logoDark : logoLight} width={45} height={45} alt="logo" />
    </header>
  )
}

export default Header