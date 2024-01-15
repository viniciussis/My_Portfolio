import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext';
import './Footer.css'

const Footer = ({ windowSize }) => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <>
      {windowSize > 520 &&
        <footer className={`footer ${isDarkMode ? '' : 'footer--light'}`}>
          <p className='footer__para'>&copy; {language === 'pt'
            ? 'Copyright | Projeto para portfólio web criado por Vinícius Silva Santos | 2023'
            : 'Copyright | Project for web portfolio created by Vinícius Silva Santos | 2023'}
          </p>
        </footer>
      }
    </>
  )
}

export default Footer