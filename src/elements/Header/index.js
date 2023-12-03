import './Header.css'
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Header = () => {
  return (
    <header className='header'>
      <div className='menu'>
        <ul className='leftSide'>
          <li><a href="#about">ABOUT ME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#certificates">CERTIFICATES</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>      
        <ul className='rightSide'>
          <li><a href="https://www.instagram.com/_viniciussis/">
            <RiInstagramFill size={16}/>&nbsp;INSTAGRAM</a></li>
          <li><a href="https://www.linkedin.com/in/viniciussis/">
            <FaLinkedinIn size={16}/>&nbsp;LINKEDIN</a></li>
          <li><a href="https://twitter.com/_viniciussis">
            <FaTwitter size={16}/>&nbsp;TWITTER</a></li>
          <li><a href="https://github.com/viniciussis">
            <FaGithub size={16}/>&nbsp;GITHUB</a></li>
        </ul>      
      </div>
    </header>
  )
} 

export default Header