import { Route, Routes } from 'react-router-dom'

import './assets/styles/typography.scss'
import './assets/styles/normalize.scss'
import './assets/styles/reset.scss'
import './main.scss'

import Default from './components/Default'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
