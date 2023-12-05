import './Button.css'

const Button = ({ link, children }) => {
  return (
    <button className='button'>
      <a href={link}>{children}</a>
    </button>
  )
}

export default Button