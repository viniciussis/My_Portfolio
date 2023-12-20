import './ArrowTop.css'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from 'react-scroll'; 

const ArrowTop = () => {
  return (
    <div className='sectArrowTop'>
      <Link href='#to-top' className='arrowTop'>
        <MdKeyboardDoubleArrowUp size={25}/>
      </Link>
    </div>
  )
}

export default ArrowTop