import { ButtonHTMLAttributes } from 'react'
import './Button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  onClick?: () => void
}

const Button = ({
  text,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${disabled ? 'button--disabled' : 'button'}`}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
