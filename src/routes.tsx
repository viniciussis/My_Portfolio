import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import './assets/styles/typography.scss'
import './assets/styles/normalize.scss'
import './assets/styles/reset.scss'
import './main.scss'

import Certificates from './pages/Certificates'
import Default from './components/Default'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import Home from './pages/Home'

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes
