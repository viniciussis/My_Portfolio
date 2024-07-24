import { TiThMenu } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './DropMenu.scss'

const DropMenu = () => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <div className="menu__dropdown">
      <span
        className="menu__dropbutton"
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <TiThMenu size={36} />
      </span>
      {dropdown && (
        <nav
          className="menu__content"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <Link to="/">Home</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/certificates">Certificados</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}
    </div>
  )
}

export default DropMenu
