import { motion } from 'framer-motion'
import { useEffect } from 'react'

import { hiddenTransition, ModalInOut } from '@/shared/animations'
import './Modal.scss'

interface ModalProps {
  type?: 'error' | 'warning' | 'success'
  message?: string
  title?: string
  onClick?: () => void
}

const Modal = ({ title, message, type, onClick }: ModalProps) => {
  useEffect(() => {
    document.body.classList.add('no-scroll')
    return () => document.body.classList.remove('no-scroll')
  }, [])

  return (
    <motion.div
      variants={hiddenTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`modal modal${type ? `--${type}` : ''}`}
      onClick={onClick}
    >
      <motion.div
        variants={ModalInOut}
        initial="initial"
        animate="animate"
        exit="exit"
        className="modal__content"
      >
        <h2 className="modal__content__title">{title}</h2>
        <p className="modal__content__para">{message}</p>
      </motion.div>
    </motion.div>
  )
}

export default Modal
