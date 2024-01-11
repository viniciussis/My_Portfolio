import React from 'react';
import Button from '../Button'
import { useTheme } from '../../context/ThemeContext'
import './Project.css'

const Project = ({ title, img, about, stack, repository, demo }) => {

  const {isDarkMode} = useTheme();

  return (
    <div className={`project ${isDarkMode ? '' : 'project--light'}`}>
      <h2 className='project__title'>{title}</h2>
      <div className='project__content'>
        <img className='project__img' src={img} alt="visual do projeto" />
        <div className='project__information'>
          <p className='project__para'>{about}</p>
          <p className='project__para'><strong>Tech Stack: </strong>{stack}</p>
          <div className='project__links'>
            <Button link={repository}>GitHub</Button>
            <Button link={demo}>Demo</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
