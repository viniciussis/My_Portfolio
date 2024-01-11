import './Home.css'
import circle from '../../images/others/circulo_colorido.png'
import profile from '../../images/others/Profile06.jpg'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import SocialMedia from '../../components/SocialMedia';

const Home = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`intro ${isDarkMode ? '' : 'intro--light'}`}>
      <div className='intro__text'>
        <h1 className='intro__title'>{language === 'pt' ? 'Olá, me chamo Vinícius' : "Hi, I'm Vinícius"}</h1>
        <p className='intro__para'>{language === 'pt'
          ? 'Bem-vindo ao meu portfólio web. Eu sou Vinícius Silva Santos, um desenvolvedor full-stack brasileiro! '
          : "Welcome to my web portfolio. I'm Vinícius Silva Santos, a full-stack developer based in Brazil"}</p>
        <div className='intro__links'>
          <a
            href='https://drive.google.com/file/d/1ct8JAVlRW2GH_OJsZwZuaUaiFLFPnEy_/view?usp=sharing'
            className='intro__button'>{language === 'pt' ? 'currículo' : 'currículo'}</a>
          <SocialMedia />
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