import './ThemeButton.css'
import { useTheme } from '../../context/ThemeContext.js';
import { CiLight, CiDark } from "react-icons/ci";


const ThemeButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button className={`theme ${isDarkMode ? '' : 'theme--light'}`} onClick={toggleDarkMode}>
      {isDarkMode 
      ? <CiLight size={20}/> 
      : <CiDark size={20}/>}
    </button>
  );
};

export default ThemeButton;