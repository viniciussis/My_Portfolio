import './Links.css'
import { Link, useLocation } from 'react-router-dom'

const Links = ({ to, children }) => {

  const location = useLocation()

  return (
    <Link className={`link ${location.pathname === to && 'linkCurrentPage'}`} to={to}>
      {children}
    </Link>
  )
}

export default Links