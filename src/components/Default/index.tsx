import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

import { slideIn, slideOut } from '@/shared/animations/motionVariants'
import Actions from '../Actions'
import Header from '../Header'
import Footer from '../Footer'
import './Default.scss'

const Default = () => {
  return (
    <>
      <Header />
      <Actions />
      <Outlet />
      <Footer />
      <motion.div
        className="slideIn"
        variants={slideIn}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <motion.div
        className="slideOut"
        variants={slideOut}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </>
  )
}

export default Default
