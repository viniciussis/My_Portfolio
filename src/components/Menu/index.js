import Links from "../Links"
import { useLanguage } from '../../context/LanguageContext';
import './Menu.css'

const Menu = () => {
  const { language } = useLanguage();

  return (
    <>
      <nav className='menu__navbar' >
        <Links to='/'>Home</Links>
        <Links to="/projects">{language === 'pt' ? 'Projetos' : 'Projects'}</Links>
        <Links to="/certificates">{language === 'pt' ? 'Certificados' : 'Certificates'}</Links>
        <Links to="/contact">{language === 'pt' ? 'Contact' : 'Contato'}</Links>
      </nav>
    </>
  )
}

export default Menu