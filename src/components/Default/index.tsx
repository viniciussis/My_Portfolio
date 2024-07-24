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
      <LanguageButton />
      <ThemeButton />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Default
