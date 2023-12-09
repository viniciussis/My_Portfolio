import './Header.css'
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from 'react-scroll';
import imgHeader from '../../favicon/apple-touch-icon.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='leftSide'>
        <Link className='link left' href="#about">ABOUT ME</Link>
        <Link className='link left' href="#projects">PROJECTS</Link>
        <Link className='link left' href="#certificates">CERTIFICATES</Link>
        <Link className='link left' href="#contact">CONTACT</Link>
      </div>
      <img src={imgHeader} width={40} height={40} alt="logo" />
      <div className='rightSide'>
        <Link className='link right' href="https://www.instagram.com/_viniciussis/"><RiInstagramFill size={16} />&nbsp;INSTAGRAM</Link>
        <Link className='link right' href="https://www.linkedin.com/in/viniciussis/"><FaLinkedinIn size={16} />&nbsp;LINKEDIN</Link>
        <Link className='link right' href="https://twitter.com/_viniciussis"><FaTwitter size={16} />&nbsp;TWITTER</Link>
        <Link className='link right' href="https://github.com/viniciussis"><FaGithub size={16} />&nbsp;GITHUB</Link>
      </div>
    </header>
  )
}

export default Header