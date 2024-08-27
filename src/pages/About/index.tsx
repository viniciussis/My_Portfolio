import { useTranslation } from 'react-i18next'

import Timeline from './Timeline'
import Hobbies from './Hobbies'
import Myself from './Myself'
import './About.scss'

const About = () => {
  const { t } = useTranslation('global')
  return (
    <main className="about">
      <h2 className="about__title">{t('aboutpage.title')}</h2>
      <Myself />
      <h2 className="about__subtitle">{t('aboutpage.timeline.title')}</h2>
      <Timeline />
      <h2 className="about__subtitle">Hobbies</h2>
      <Hobbies />
    </main>
  )
}

export default About
