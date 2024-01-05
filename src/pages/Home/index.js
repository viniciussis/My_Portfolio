import './Home.css'
import circle from '../../images/circulo_colorido.png'
import profile from '../../images/Profile 06.jpeg.jpg'
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

const Home = () => {
  const {isDarkMode} = useTheme();
  const {language} = useLanguage();

  return (
    <div className={`intro ${isDarkMode ? '' : 'intro--light'}`}>
      <div className='intro__text'>
        <h1 className='intro__title'>{language === 'pt' ? 'Olá, me chamo Vinícius' : "Hi, I'm Vinícius"}</h1>
        <p className='intro__para'>{ language ==='pt' 
        ? 'Bem-vindo ao meu portfólio web. Eu sou Vinícius Silva Santos, um desenvolvedor full-stack brasileiro! ' 
        : "Welcome to my web portfolio. I'm Vinícius Silva Santos, a full-stack developer based in Brazil"}</p>
        <div className='intro__social'>
          <a className={`intro__media ${isDarkMode ? '' : 'intro__media--light'}`} href="https://www.instagram.com/_viniciussis/"><RiInstagramFill size={18} /></a>
          <a className={`intro__media ${isDarkMode ? '' : 'intro__media--light'}`} href="https://www.linkedin.com/in/viniciussis/"><FaLinkedinIn size={18} /></a>
          <a className={`intro__media ${isDarkMode ? '' : 'intro__media--light'}`} href="https://twitter.com/_viniciussis"><FaTwitter size={18} /></a>
          <a className={`intro__media ${isDarkMode ? '' : 'intro__media--light'}`} href="https://github.com/viniciussis"><FaGithub size={18} /></a>
        </div>
      </div>
      <div className='intro__images'>
        <img className='intro__prof' src={profile} alt="profile" aria-hidden={true} />
        <img className='intro__circle' src={circle} alt="background colorful circle" />
      </div>
    </div>
  )
}

export default Home