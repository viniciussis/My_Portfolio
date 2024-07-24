import { Link } from 'react-router-dom'
import './Menu.scss'

const Menu = () => {
  return (
    <nav className="menu">
      <Link className='menu__link' to="/">Home</Link>
      <Link className='menu__link' to="/projects">Projetos</Link>
      <Link className='menu__link' to="/certificates">Certificados</Link>
      <Link className='menu__link' to="/contact">Contato</Link>
    </nav>
  )
}

export default Menu
