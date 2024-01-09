import './Projects.css'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Project from '../../components/Project';
import projectsData from '../../data/projectsData';

const Projects = () => {

  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

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