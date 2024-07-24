import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import './SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className="social">
      <a
        className={`social__media social__media--light`}
        href="https://www.instagram.com/_viniciussis/"
      >
        <RiInstagramFill size={18} />
      </a>
      <a
        className={`social__media social__media--light`}
        href="https://www.linkedin.com/in/viniciussis/"
      >
        <FaLinkedinIn size={18} />
      </a>
      <a
        className={`social__media social__media--light`}
        href="https://twitter.com/dev_ilman_"
      >
        <FaTwitter size={18} />
      </a>
      <a
        className={`social__media social__media--light`}
        href="https://github.com/viniciussis"
      >
        <FaGithub size={18} />
      </a>
    </div>
  )
}

export default SocialMedia
