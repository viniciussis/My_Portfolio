import { useTranslation } from 'react-i18next'
import { MdGTranslate } from 'react-icons/md'

import './LanguageButton.scss'

const LanguageButton = () => {
  const { i18n } = useTranslation('global')

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language == 'pt' ? 'en' : 'pt')
  }

  return (
    <button className="languageButton" onClick={toggleLanguage}>
      <MdGTranslate size={20} />
    </button>
  )
}

export default LanguageButton
