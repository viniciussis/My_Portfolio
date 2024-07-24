import './Button.scss'

const Button = ({ size = 'normal' }) => {
  return <a className={`button button--light button--${size}`}></a>
}

export default Button
