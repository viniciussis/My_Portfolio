import { CiLight, CiDark } from 'react-icons/ci'
import useTheme from '@/context/useTheme'
import { useEffect } from 'react'

import './ThemeButton.scss'

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <button className="themeButton" onClick={toggleTheme}>
      {theme == 'light' ? <CiLight size={20} /> : <CiDark size={20} />}
    </button>
  )
}

export default ThemeButton
