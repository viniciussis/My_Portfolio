import { Outlet } from 'react-router-dom'

import Actions from '../Actions'
import Footer from '../Footer'
import Header from '../Header'

const Default = () => {
  return (
    <>
      <Header />
      <Actions />
      <Outlet />
      <Footer />
    </>
  )
}

export default Default
