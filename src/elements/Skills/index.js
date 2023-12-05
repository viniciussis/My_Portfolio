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
        <div>
          <FaCss3Alt size={60} />
          <h3>CSS</h3>
        </div>
        <div>
          <FaHtml5 size={60} />
          <h3>HTML</h3>
        </div>
        <div>
          <IoLogoJavascript size={60}/>
          <h3>JavaScript</h3>
        </div>
        <div>
          <FaJava size={60} />
          <h3>Java</h3>
        </div>
        <div>
          <GrMysql size={60}/>
          <h3>SQL</h3>
        </div>
        <div>
          <FaReact size={60}/>
          <h3>React</h3>
        </div>
        <div>
          <FaPython  size={60}/>
          <h3>Python</h3>
        </div>
        <div>
          <SiTypescript  size={60}/>
          <h3>Typescript</h3>
        </div>
      </div>
    </div>
  )
}

export default Skills