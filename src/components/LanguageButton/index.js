import './LanguageButton.css'
import { useLanguage } from '../../context/LanguageContext.js';
import { MdGTranslate } from "react-icons/md";

const LanguageButton = () => {
  const { toggleLanguage } = useLanguage();

  return (
    <button className='language' onClick={toggleLanguage}>
      <MdGTranslate size={20}/>
    </button>
  )
}

export default LanguageButton