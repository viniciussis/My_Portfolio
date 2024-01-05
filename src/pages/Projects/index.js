import './Projects.css'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Project from '../../components/Project';
import img from '../../images/organo.png'

const Projects = () => {

  const {isDarkMode} = useTheme();
  const {language} = useLanguage();
  const projectsData = [
    { 
      id: 1,
      title: 'Organo',
      description: 'Organizador de times',
      link: 'https://organo-project-jet.vercel.app/',
      img: img
    },
    { 
      id: 2,
      title: 'Virtual Space',
      description: 'Blog para postar pensamentos e insights',
      link: 'https://virtual-space-three.vercel.app',
      img: ''
    }
  ];

  return (
    <div className={`projects ${isDarkMode ? '' : 'projects--light'}`}>
      <h1 className='projects__title'>{language === 'pt' ? 'Projetos' : 'Projects'}</h1>
      <div className='projects__container'>
        <FaArrowLeft size={24} style={{cursor:'pointer'}}/>
        <Project
          title={projectsData[0].title}
          img={projectsData[0].img}
          description={projectsData[0].description}
          link={projectsData[0].link}
        />
        <FaArrowRight size={24} style={{cursor:'pointer'}}/>
      </div>
    </div>
  )
}

export default Projects