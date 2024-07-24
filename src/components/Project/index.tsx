import Button from '../Button'
import './Project.scss'

const Project = () => {
  return (
    <div className={`project project--light`}>
      <h2 className="project__title"></h2>
      <div className="project__content">
        <img className="project__img" alt="visual do projeto" />
        <div className="project__information">
          <p className="project__para"></p>
          <p className="project__para">
            <strong>Tech Stack: </strong>
          </p>
          <div className="project__links">
            <Button></Button>
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
