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
      <img className='logo' src={imgHeader} width={55} height={55} alt="logo" />
      <div className='rightSide'>
        <a className='link right' href="https://www.instagram.com/_viniciussis/"><RiInstagramFill size={16} />&nbsp;INSTAGRAM</a>
        <a className='link right' href="https://www.linkedin.com/in/viniciussis/"><FaLinkedinIn size={16} />&nbsp;LINKEDIN</a>
        <a className='link right' href="https://twitter.com/_viniciussis"><FaTwitter size={16} />&nbsp;TWITTER</a>
        <a className='link right' href="https://github.com/viniciussis"><FaGithub size={16} />&nbsp;GITHUB</a>
      </div>
    </header>
  )
}

export default Header