import { useTheme } from '../../context/ThemeContext';
import './Field.css';

const Field = ({ type = 'text', label, placeholder, mandatory = false, value }) => {

  const { isDarkMode } = useTheme();

  return (
    <div className='field'>
      <label className='field__label' htmlFor={label}>{label}</label>
      <input className={`field__input ${isDarkMode ? '' : 'field__input--light'}`}
        type={type} 
        value={value} 
        id={label} 
        required={mandatory} 
        placeholder={`${placeholder}`}
      />
    </div>
  )
}

export default Field