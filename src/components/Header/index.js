import './Header.css';
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import logoDark from '../../favicon/apple-touch-icon.png';
import logoLight from '../../favicon/apple-touch-icon-light.png';
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
      <img className='menu__logo' src={isDarkMode ? logoDark : logoLight} width={55} height={55} alt="logo" />
      <div className='menu__social'>
        <a className='menu__link' href="https://www.instagram.com/_viniciussis/"><RiInstagramFill size={16} />&nbsp;Instagram</a>
        <a className='menu__link' href="https://www.linkedin.com/in/viniciussis/"><FaLinkedinIn size={16} />&nbsp;LinkedIn</a>
        <a className='menu__link' href="https://twitter.com/_viniciussis"><FaTwitter size={16} />&nbsp;Twitter</a>
        <a className='menu__link' href="https://github.com/viniciussis"><FaGithub size={16} />&nbsp;GitHub</a>
      </div>
    </header>
  )
}

export default Header