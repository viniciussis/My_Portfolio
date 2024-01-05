import React from 'react';
import Button from '../Button'
import { useTheme } from '../../context/ThemeContext'
import './Project.css'

const Project = ({ title, img, about, stack, github, website }) => {

  const {isDarkMode} = useTheme();

  return (
    <div className={`project ${isDarkMode ? '' : 'project--light'}`}>
      <h3 className='project__title'>{title}</h3>
      <div className='project__content'>
        <img className='project__img' src={img} alt="visual do projeto" />
        <div className='project__information'>
          <p className='project__para'>{about}</p>
          <p className='project__para'><strong>Tech Stack: </strong>{stack}</p>
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
