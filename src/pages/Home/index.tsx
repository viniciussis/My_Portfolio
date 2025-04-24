import { useTranslation } from 'react-i18next'

import SocialMedia from '@/components/SocialMedia'
import './Home.scss'

const Home = () => {
  const { t } = useTranslation('global')

  return (
    <main className="home">
      <div className="home__social">
        <img
          className="home__social__profile"
          src="images/common/profile.jpg"
          alt="Vinicius's profile picture"
        />
      </div>
      <div className="home__greets">
        <h1 className="home__greets__title">{t('homepage.title')}</h1>
        <p className="home__greets__para">{t('homepage.para')}</p>
        <div className="home__greets__links">
          <a
            href="https://drive.google.com/file/d/1B2f3nT7zfSUgscKc3HK_BS-9kggCjxAA/view?usp=sharing"
            className="home__greets__links__link"
          >
            {t('homepage.curriculum')}
          </a>
          <SocialMedia />
        </div>
      </div>
    </main>
  )
}

export default Home
