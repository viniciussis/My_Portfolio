import './Links.css'
import { Link, useLocation } from 'react-router-dom'

const Links = ({ to, children }) => {

  const location = useLocation()

  return (
    <Link className={`menu__link ${location.pathname === to && 'menu__link--current'}`} to={to}>
      {children}
    </Link>
  )
}

export default Links