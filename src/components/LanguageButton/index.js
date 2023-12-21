import './LanguageButton.css'
import { useLanguage } from '../../context/LanguageContext.js';
import { MdGTranslate } from "react-icons/md";
import { useTheme } from '../../context/ThemeContext.js';

const LanguageButton = () => {
  const { toggleLanguage } = useLanguage();
  const {isDarkMode} = useTheme();

  return (
    <button className={`language ${isDarkMode ? '' : 'language--light'}`} onClick={toggleLanguage}>
      <MdGTranslate size={20}/>
    </button>
  )
}

export default LanguageButton