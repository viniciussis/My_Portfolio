import circle from '../../images/others/circulo_colorido.png'
import profile from '../../images/others/Profile06.jpg'
import SocialMedia from '@/components/SocialMedia'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="home__greets">
        <h1 className="home__greets__title">Olá, me chamo Vinícius</h1>
        <p className="home__greets__para">
          Bem-vindo ao meu portfólio web. Eu sou Vinícius Silva Santos, um
          desenvolvedor full-stack brasileiro!
        </p>
        <div className="home__greets__links">
          <a
            href="https://drive.google.com/file/d/167AD4TVa-fOxwcwTfgAVXYqsrb0l5DQO/view?usp=drive_link"
            className="home__greets__links__link"
          >
            currículo
          </a>
          <SocialMedia />
        </div>
      </div>
      <div className="home__images">
        <img
          className="home__images__prof"
          src={profile}
          alt="profile"
          aria-hidden={true}
        />
        <img
          className="home__images__circle"
          src={circle}
          alt="background colorful circle"
        />
      </div>
    </div>
  )
}

export default Home
