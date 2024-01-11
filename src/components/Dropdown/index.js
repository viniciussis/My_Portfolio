import { useTheme } from '../../context/ThemeContext';
import './Dropdown.css'

const Dropdown = ({ value, mandatory, label, placeholder }) => {

  const { isDarkMode } = useTheme();

  return (
    <div className='dropdown'>
      <label className='dropdown__label' htmlFor={label} >{label}</label>
      <select 
        className={`dropdown__select ${isDarkMode ? '' : 'dropdown__select--light'}`} 
        value={value}
        id={label}
        required={mandatory}
        placeholder={`${placeholder}`}
      >
        <option disabled style={{display:'none'}}>Escolha uma opção</option>
      </select>
    </div>
  )
}

export default Dropdown