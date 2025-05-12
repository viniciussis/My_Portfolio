import { useTranslation } from 'react-i18next'

import SocialMedia from '@/components/SocialMedia'
import './Home.scss'

const Home = () => {
  const { t, i18n } = useTranslation('global')

  const cvLink =
    i18n.language === 'pt'
      ? 'https://drive.google.com/file/d/1T5mRyKn0DocH_-8muMU4-8MRE6Zxvjut/view?usp=sharing'
      : 'https://drive.google.com/file/d/11hOWj-XFO7ifZgL6o-dvHt5nQm8tEL-H/view?usp=sharing'

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
            href={cvLink}
            className="home__greets__links__link"
            rel="noopener noreferrer"
            target="_blank"
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
