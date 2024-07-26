import { useTranslation } from 'react-i18next'
import './ProjectCard.scss'
import React from 'react'

interface ProjectCardProps {
  img: string
  repo: string
  demo: string
  name: string
  description: string
  topics: string[] | undefined
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  repo,
  demo,
  name,
  topics,
  description,
}) => {
  const { t } = useTranslation('global')
  return (
    <div className="project">
      <img className="project__banner" src={img} alt={name} />
      <div className="project__content">
        <h5 className="project__content__title">{name.replace(/_/g, ' ')}</h5>
        <p className="project__content__description">{description}</p>
      </div>
      <div className="project__stack">
        {topics?.map((stack, index) => (
          <span key={index} className="project__stack__tag">
            {stack}
          </span>
        ))}
      </div>
      <div className="project__actions">
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="project__actions__link"
        >
          {t('cardButton.1')}
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project__actions__link"
        >
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
