import { useTheme } from '../../context/ThemeContext';
import './Button.css'

const Button = ({ link, children, size = 'normal' }) => {
  const { isDarkMode } = useTheme();

  return (
    <a
      className={`button ${isDarkMode ? '' : 'button--light'} button--${size}`}
      href={link}>
      {children}
    </a>
  )
}

export default Button