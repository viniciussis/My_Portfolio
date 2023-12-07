import './Skills.css'
import { FaJava, FaCss3Alt, FaPython, FaReact, FaHtml5 } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";

const Skills = ({ text }) => {
  return(
    <div className='sect-skills'>
      <h1>SKILLS</h1>
      <div className='skills'>
        <div className='skill'>
          <FaCss3Alt size={60} />
          <h3>CSS</h3>
        </div>
        <div className='skill'>
          <FaHtml5 size={60} />
          <h3>HTML</h3>
        </div>
        <div className='skill'>
          <IoLogoJavascript size={60}/>
          <h3>JavaScript</h3>
        </div>
        <div className='skill'>
          <FaJava size={60} />
          <h3>Java</h3>
        </div>
        <div className='skill'>
          <GrMysql size={60}/>
          <h3>MySQL</h3>
        </div>
        <div className='skill'>
          <FaReact size={60}/>
          <h3>React</h3>
        </div>
        <div className='skill'>
          <FaPython  size={60}/>
          <h3>Python</h3>
        </div>
        <div className='skill'>
          <SiTypescript  size={60}/>
          <h3>Typescript</h3>
        </div>
      </div>
    </div>
  )
}

export default Skills