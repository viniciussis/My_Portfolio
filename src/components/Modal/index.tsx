import { ModalInOut } from '@/shared/animations'
import { motion } from 'framer-motion'
import './Modal.scss'

interface ModalProps {
  type?: 'error' | 'warning' | 'success'
  message?: string
  title?: string
}

const Modal = ({ title, message, type }: ModalProps) => {
  return (
    <motion.div
      variants={ModalInOut}
      initial="initial"
      animate="animate"
      className={`modal modal${type ? `--${type}` : ''}`}
    >
      <div className="modal__content">
        <h2 className="modal__content__title">{title}</h2>
        <p className="modal__content__para">{message}</p>
      </div>
    </motion.div>
  )
}

export default Modal
