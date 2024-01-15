import { Outlet } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import Footer from '../Footer'
import Header from '../Header'
import LanguageButton from '../LanguageButton'
import ThemeButton from '../ThemeButton'
import './Default.css'
import { useEffect, useState } from 'react'

const Default = ({ children }) => {
  const {isDarkMode} = useTheme();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return (
    <div className={`default ${ isDarkMode ? '' : 'default--light' }`}>
      <Header windowSize={windowSize}/>
      <Outlet/>
      {children}
      <Footer windowSize={windowSize}/>
      <LanguageButton/>
      <ThemeButton/>
    </div>
  )
}

export default Default