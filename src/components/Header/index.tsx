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
            ? 'images/common/logo-sm-light.png'
            : 'images/common/logo-sm-dark.png'
        }
        className="header__logo"
        alt="logo"
      />
      <img
        src={
          theme == 'light'
            ? 'images/common/logo-lg-light.png'
            : 'images/common/logo-lg-dark.png'
        }
        className="header__logo--lg"
        alt="logo"
      />
    </motion.header>
  )
}

export default Header
