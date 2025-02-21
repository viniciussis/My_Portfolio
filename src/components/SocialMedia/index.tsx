import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import './SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className="social">
      <a
        className="social__media"
        target="_blank"
        href="https://www.instagram.com/_devinicius/"
      >
        <RiInstagramFill size={18} />
      </a>
      <a
        target="_blank"
        className="social__media"
        href="https://www.linkedin.com/in/viniciussis/"
      >
        <FaLinkedinIn size={18} />
      </a>
      <a
        target="_blank"
        className="social__media"
        href="https://twitter.com/_devinicius"
      >
        <FaTwitter size={18} />
      </a>
      <a
        target="_blank"
        className="social__media"
        href="https://github.com/viniciussis"
      >
        <FaGithub size={18} />
      </a>
    </div>
  )
}

export default SocialMedia
