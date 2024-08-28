import { useTranslation } from 'react-i18next'
import './Hobbies.scss'

const Hobbies = () => {
  const { t } = useTranslation('global')
  return (
    <section className="about__hobbies">
      <h2 className="about__subtitle">Hobbies</h2>
      <p className="about__para">{t('aboutpage.hobbies.sub')} </p>
      <p className="about__para">{t('aboutpage.hobbies.1')} </p>
      <p className="about__para">{t('aboutpage.hobbies.2')} </p>
      <p className="about__para">{t('aboutpage.hobbies.3')} </p>
      <p className="about__para">{t('aboutpage.hobbies.4')} </p>
    </section>
  )
}

export default Hobbies
