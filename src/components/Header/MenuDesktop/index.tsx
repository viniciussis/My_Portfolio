import { Link } from 'react-router-dom'
import './MenuDesktop.scss'

const MenuDesktop = () => {
  return (
    <nav className="menuDesktop">
      <Link className="menuDesktop__link" to="/">
        Home
      </Link>
      <Link className="menuDesktop__link" to="/projects">
        Projetos
      </Link>
      <Link className="menuDesktop__link" to="/certificates">
        Certificados
      </Link>
      <Link className="menuDesktop__link" to="/contact">
        Contato
      </Link>
    </nav>
  )
}

export default MenuDesktop
