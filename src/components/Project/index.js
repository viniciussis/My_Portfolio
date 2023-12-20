import './Project.css'


const Project = ({ image, name }) => {
  return(
    <div className='project'>
      <img src={image} alt={name}/>
      <div className='projectDescription black'></div>
      <div className='projectLinks black'></div>
      <div className='projectKeywords black'></div>
    </div>
  )
}

export default Project