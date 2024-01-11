import './Projects.css'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Project from '../../components/Project';
import projectsData from '../../data/projectsData';
import { useState } from 'react';

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1));
  };

  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`projects ${isDarkMode ? '' : 'projects--light'}`}>
      <h1 className='projects__title'>{language === 'pt' ? 'Projetos' : 'Projects'}</h1>
      <div className='projects__container'>
        <FaArrowLeft onClick={handlePrevClick} size={28} style={{ cursor: 'pointer' }} />
        <Project
          title={projectsData[currentIndex].title}
          img={projectsData[currentIndex].img}
          about={projectsData[currentIndex].about}
          demo={projectsData[currentIndex].demo}
          stack={projectsData[currentIndex].stack}
          repository={projectsData[currentIndex].repository}
        />
        <FaArrowRight onClick={handleNextClick} size={28} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  )
}

export default Projects