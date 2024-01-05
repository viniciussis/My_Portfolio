import React from 'react';
import Button from '../Button'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import './Project.css'

const Project = ({ title, img, about, stack, github, website }) => {

  const {isDarkMode} = useTheme();
  const {language} = useLanguage();

  return (
    <div className={`project ${isDarkMode ? '' : 'project--light'}`}>
      <h3 className='project__title'>{title}</h3>
      <div className='project__content'>
        <img className='project__img' src={img} alt="visual do projeto" />
        <div className='project__information'>
          <p className='project__para'>{about}</p>
          <p className='project__para'>{stack}</p>
          <div className='project__links'>
            <Button link={github}>GitHub</Button>
            <Button link={website}>Demo</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
