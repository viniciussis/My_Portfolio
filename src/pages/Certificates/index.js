import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import './Certificates.css'

const Certificates = () => {

  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const certificatesData = [
    {
      index: 0,
      imageUrl: ''
    },
    {
      index: 1,
      imageUrl: ''
    },

  ]

  return (
    <div className={`certificates ${isDarkMode ? '' : 'certificates--light'}`}>
      <h2 className='certificates__title'>{language === 'pt' ? 'Certificados' : 'Certificates'}</h2>
      <div className='certificates__container'>
        {certificatesData.map((imageUrl, index) => (
          <img className='certificates__img' key={index} src={imageUrl} alt={`Certificado ${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default Certificates