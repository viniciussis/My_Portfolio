import { Outlet } from 'react-router-dom'

import LanguageButton from './LanguageButton'
import ThemeButton from './ThemeButton'
import Footer from '../Footer'
import Header from '../Header'
import './Default.scss'

const Default = () => {
  return (
    <div className="default">
      <Header />
      <Outlet />
      <Footer />
      <LanguageButton />
      <ThemeButton />
    </div>
  )
}

export default Default
