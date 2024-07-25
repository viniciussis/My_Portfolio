import React from 'react'
import './Button.scss'

interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button' }) => {
  return (
    <button type={type} className="button">
      {children}
    </button>
  )
}

export default Button
