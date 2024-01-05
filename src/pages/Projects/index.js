import './Projects.css'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Project from '../../components/Project';
import Organo from '../../images/organo.png'
import VS from '../../images/vs.png'

const Projects = () => {

  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const projectsData = [
    {
      title: 'Organo',
      about: 'Plataforma para criar e organizar dinamicamente times ou equipes, adaptando-se às necessidades específicas do usuário.',
      website: 'https://organo-project-jet.vercel.app/',
      github: 'https://github.com/viniciussis/Organo_Project.git',
      stack: 'JavaScript, CSS, HTML, ReactJS',
      img: Organo
    },
    {
      title: 'Virtual Space',
      about: 'Desenvolvimento de um mini blog em React, com ênfase em conceitos avançados, incluindo React Router, rotas dinâmicas, Single Page Applications (SPAs), e integração de bibliotecas como react-markdown e react-icons.',
      website: 'https://virtual-space-three.vercel.app',
      github: 'https://github.com/viniciussis/Virtual_Space.git',
      stack: 'JavaScript, CSS, HTML, ReactJS',
      img: VS
    }
  ];

  return (
    <div className={`projects ${isDarkMode ? '' : 'projects--light'}`}>
      <h1 className='projects__title'>{language === 'pt' ? 'Projetos' : 'Projects'}</h1>
      <div className='projects__container'>
        <FaArrowLeft size={28} style={{ cursor: 'pointer' }} />
        <Project
          title={projectsData[0].title}
          img={projectsData[0].img}
          about={projectsData[0].about}
          website={projectsData[0].link}
          stack={projectsData[0].stack}
          github={projectsData[0].github}
        />
        <FaArrowRight size={28} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  )
}

export default Projects