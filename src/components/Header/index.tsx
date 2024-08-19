import useTheme from '@/context/useTheme'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import './Header.scss'
import { motion } from 'framer-motion'

const Header = () => {
  const { theme } = useTheme()

  return (
    <motion.header
      animate={{ y: 0 }}
      initial={{ y: '-100%' }}
      transition={{ delay: 0.5, duration: 1, type: 'tween' }}
      className="header"
    >
      <MenuMobile />
      <MenuDesktop />
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
    </motion.header>
  )
}

export default Header
