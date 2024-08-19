import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import { topDownTransition } from '@/shared/animations/motionVariants'
import useTheme from '@/context/useTheme'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import './Header.scss'

const Header = () => {
  const location = useLocation()
  const { theme } = useTheme()

  return (
    <motion.header
      variants={topDownTransition}
      animate={location.pathname === '/' ? 'onScreen' : false}
      initial={location.pathname === '/' ? 'outScreen' : false}
      prefix="p"
      className="header"
    >
      <img
        src={
          theme == 'light'
            ? 'images/brand/brand-sm-light.png'
            : 'images/brand/brand-sm-dark.png'
        }
        className="header__logo"
        alt="logo"
      />
      <img
        src={
          theme == 'light'
            ? 'images/brand/brand-md-light.png'
            : 'images/brand/brand-md-dark.png'
        }
        className="header__logo--md"
        alt="logo"
      />
      <MenuMobile />
      <MenuDesktop />
    </motion.header>
  )
}

export default Header
