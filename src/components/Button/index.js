import { useTheme } from '../../context/ThemeContext';
import './Button.css'

const Button = ({ link, children }) => {
  const {isDarkMode} = useTheme();

  return (
    <button className={`button ${isDarkMode ? '' : 'button--light'}`}>
      <a href={link}>{children}</a>
    </button>
  )
}

export default Button