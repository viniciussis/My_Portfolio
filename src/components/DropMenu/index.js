import { TiThMenu } from "react-icons/ti";
import Links from '../Links';
import { useLanguage } from '../../context/LanguageContext';
import './DropMenu.css';
import { useState } from "react";

const DropMenu = () => {
  const { language } = useLanguage();
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className ='menu__dropdown'>
      <span className='menu__dropbutton' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
        <TiThMenu size={36} />
      </span>
      {dropdown && 
        <nav className='menu__content' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
          <Links to='/'>Home</Links>
          <Links to="/projects">{language === 'pt' ? 'Projetos' : 'Projects'}</Links>
          <Links to="/certificates">{language === 'pt' ? 'Certificados' : 'Certificates'}</Links>
          <Links to="/contact">{language === 'pt' ? 'Contact' : 'Contato'}</Links>
        </nav>
      }
    </div>
  )
}

export default DropMenu