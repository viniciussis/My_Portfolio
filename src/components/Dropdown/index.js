import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import './Dropdown.css'

const Dropdown = ({ value, mandatory, label, placeholder, onChange }) => {

  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div className='dropdown'>
      <label className='dropdown__label' htmlFor={label} >{label}</label>
      <select 
        className={`dropdown__select ${isDarkMode ? '' : 'dropdown__select--light'}`} 
        value={value}
        id={label}
        onChange={onChange}
        required={mandatory}
        placeholder={`${placeholder}`}
        defaultValue=''
      >
        <option value='' disabled style={{display:'none'}}>{language === 'pt' ? 'Escolha uma opção...' : 'Choose an option...'}</option>
        <option value="Contratação">{language === 'pt' ? 'Contratação' : 'Hiring'}</option>
        <option value="Dúvidas">{language === 'pt' ? 'Dúvidas' : 'Doubts'}</option>
        <option value="Parcerias">{language === 'pt' ? 'Parcerias' : 'Partnerships'}</option>
        <option value="Outros">{language === 'pt' ? 'Outros' : 'Others'}</option>
      </select>
    </div>
  )
}

export default Dropdown