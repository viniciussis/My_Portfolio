import { TiThMenu } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './MenuMobile.scss'

const MenuMobile = () => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <div className="menuMobile">
      <span
        className="menuMobile__dropbutton"
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <TiThMenu size={36} />
      </span>
      {dropdown && (
        <nav
          className="menuMobile__dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <Link className="menuMobile__dropdown__link" to="/">
            Home
          </Link>
          <Link className="menuMobile__dropdown__link" to="/projects">
            Projetos
          </Link>
          <Link className="menuMobile__dropdown__link" to="/certificates">
            Certificados
          </Link>
          <Link className="menuMobile__dropdown__link" to="/contact">
            Contact
          </Link>
        </nav>
      )}
    </div>
  )
}

export default MenuMobile
