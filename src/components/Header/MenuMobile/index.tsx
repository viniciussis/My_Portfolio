import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { TiThMenu } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import ThemeBtn from '@/components/Actions/ThemeBtn'
import LangBtn from '@/components/Actions/LangBtn'
import { hiddenTransition } from '@/shared/animations'
import './MenuMobile.scss'

const MenuMobile = () => {
  const [dropdown, setDropdown] = useState(false)
  const { t } = useTranslation('global')

  return (
    <div className="menuMobile">
      <div className="menuMobile__actions">
        <LangBtn />
        <ThemeBtn />
      </div>
      <span
        className="menuMobile__dropbutton"
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        onClick={() => setDropdown(dropdown == true ? false : true)}
      >
        <TiThMenu size={36} />
      </span>
      <AnimatePresence initial={false} mode="wait">
        {dropdown && (
          <motion.nav
            variants={hiddenTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="menuMobile__dropdown"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <Link
              onClick={() => setDropdown(false)}
              className="menuMobile__dropdown__link"
              to="/"
            >
              <motion.p
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 250 }}
                exit={{ x: '100vw' }}
              >
                Home
              </motion.p>
            </Link>
            <Link
              onClick={() => setDropdown(false)}
              className="menuMobile__dropdown__link"
              to="/about"
            >
              <motion.p
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 250 }}
                exit={{ x: '-100vw' }}
              >
                {t('headerMenu.1')}
              </motion.p>
            </Link>
            <Link
              onClick={() => setDropdown(false)}
              className="menuMobile__dropdown__link"
              to="/skills"
            >
              <motion.p
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 250 }}
                exit={{ x: '100vw' }}
              >
                {t('headerMenu.2')}
              </motion.p>
            </Link>
            <Link
              onClick={() => setDropdown(false)}
              className="menuMobile__dropdown__link"
              to="/projects"
            >
              <motion.p
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 250 }}
                exit={{ x: '-100vw' }}
              >
                {t('headerMenu.3')}
              </motion.p>
            </Link>
            <Link
              onClick={() => setDropdown(false)}
              className="menuMobile__dropdown__link"
              to="/contact"
            >
              <motion.p
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 250 }}
                exit={{ x: '100vw' }}
              >
                {t('headerMenu.4')}
              </motion.p>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MenuMobile
