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
      </div>
      <div className="home__greets">
        <h1 className="home__greets__title">{t('homepage.title')}</h1>
        <p className="home__greets__para">{t('homepage.para')}</p>
        <div className="home__greets__links">
          <a
            href="https://drive.google.com/file/d/1qFa7Npp6Y0VoLVI_lBmAJ4qldR01i4Cy/view?usp=sharing"
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
