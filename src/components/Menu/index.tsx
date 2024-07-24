import { Link } from 'react-router-dom'
import './Menu.scss'

const Menu = () => {
  return (
    <>
      <nav className="menu__navbar">
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/certificates">Certificados</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </>
  )
}

export default Menu
