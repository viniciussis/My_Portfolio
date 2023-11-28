import './Header.css'

const Header = () => {
  return (
    <header>
      <a href="/"> 
        <img src="images\logo_main.png" alt="minha-logo"/> 
      </a>
      <nav>
        <ul>
          <li><a href="#about">About_Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
} 

export default Header