import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import './Certificates.css'
import certificatesData from '../../data/certificatesData';

const Certificates = () => {

  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`certificates ${isDarkMode ? '' : 'certificates--light'}`}>
      <h2 className='certificates__title'>{language === 'pt' ? 'Certificados' : 'Certificates'}</h2>
      <div className='certificates__container'>
        {certificatesData.map(certificate => (
          <img className='certificates__img' key={certificate.id} src={certificate.imagePath} alt={certificate.name} />
        ))}
      </div>
    </div>
  )
}

export default Certificates