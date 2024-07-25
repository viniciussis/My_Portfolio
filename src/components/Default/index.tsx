import { Outlet } from 'react-router-dom'

import LanguageButton from './LanguageButton'
import ThemeButton from './ThemeButton'
import Footer from '../Footer'
import Header from '../Header'

const Default = () => {
  return (
    <>
      <Header />
      <LanguageButton />
      <ThemeButton />
      <Outlet />
      <Footer />
    </>
  )
}

export default Default
