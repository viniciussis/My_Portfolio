import { useLanguage } from '../../context/LanguageContext'
import './Footer.css'

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className='footer'>
      <p>&copy; {language === 'pt' 
        ? 'Copyright | Projeto para portfólio web criado por Vinícius Silva Santos | 2023' 
        : 'Copyright | Project for web portfolio created by Vinícius Silva Santos | 2023'}
      </p>
    </footer>
  )
}

export default Footer