import './Title.css'
import { FcIdea } from "react-icons/fc";

const Title = ({ text }) => {
  return(
    <div className='sect-title'>
      <h1><FcIdea/>&nbsp;{text}</h1>
    </div>
  )
}

export default Title