import './Header.css'
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import imgHeader from '../../favicon/apple-touch-icon.png'
import Links from '../Links'
import { useLanguage } from '../../context/LanguageContext'

const Header = () => {
  const { language } = useLanguage();

  return (
    <header className='menu'>
      <nav className='navigator'>
        <Links to='/'>Home</Links>
        <Links to="/about-me">{language === 'pt' ? 'Sobre Mim' : 'About Me'}</Links>
        <Links to="/projects">{language === 'pt' ? 'Projetos' : 'Projects'}</Links>
        <Links to="/certificates">{language === 'pt' ? 'Certificados' : 'Certificates'}</Links>
        <Links to="/contact">{language === 'pt' ? 'Contact' : 'Contato'}</Links>
      </nav>
      <img className='logo' src={imgHeader} width={55} height={55} alt="logo" />
      <div className='links'>
        <a className='link' href="https://www.instagram.com/_viniciussis/"><RiInstagramFill size={16} />&nbsp;Instagram</a>
        <a className='link' href="https://www.linkedin.com/in/viniciussis/"><FaLinkedinIn size={16} />&nbsp;LinkedIn</a>
        <a className='link' href="https://twitter.com/_viniciussis"><FaTwitter size={16} />&nbsp;Twitter</a>
        <a className='link' href="https://github.com/viniciussis"><FaGithub size={16} />&nbsp;GitHub</a>
      </div>
    </header>
  )
}

export default Header