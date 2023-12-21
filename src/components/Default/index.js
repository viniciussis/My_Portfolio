import { Outlet } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import Footer from '../Footer'
import Header from '../Header'
import LanguageButton from '../LanguageButton'
import ThemeButton from '../ThemeButton'
import './Default.css'

const Default = ({ children }) => {
  const {isDarkMode} = useTheme();

  return (
    <div className={`default ${ isDarkMode ? '' : 'default--light' }`}>
      <Header/>
      <Outlet/>
      {children}
      <Footer/>
      <LanguageButton/>
      <ThemeButton/>
    </div>
  )
}

export default Default