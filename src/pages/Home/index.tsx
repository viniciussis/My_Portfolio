import SocialMedia from '@/components/SocialMedia'
import { useTranslation } from 'react-i18next'
import './Home.scss'

const Home = () => {
  const { t } = useTranslation('global')

  return (
    <div className="home">
      <div className="home__social">
        <img
          className="home__social__profile"
          src="images/common/profile.jpg"
          alt="Vinicius's profile picture"
          aria-hidden={true}
        />
        <img
          className="home__social__circle"
          src="images/common/circle.png"
          alt="background colorful circle"
        />
      </div>
      <div className="home__greets">
        <h1 className="home__greets__title">{t('homepage.title')}</h1>
        <p className="home__greets__para">{t('homepage.para')}</p>
        <div className="home__greets__links">
          <a
            href="https://drive.google.com/file/d/167AD4TVa-fOxwcwTfgAVXYqsrb0l5DQO/view?usp=drive_link"
            className="home__greets__links__link"
          >
            {t('homepage.curriculum')}
          </a>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default Home
