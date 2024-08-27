import { useTranslation } from 'react-i18next'
import './Myself.scss'

const Myself = () => {
  const { t } = useTranslation('global')
  return (
    <section className="about__myself">
      <h3 className="about__myself__sub">{t('aboutpage.greetings.sub')}</h3>
      <p className="about__myself__para">
        <img src="images/common/profile.jpg" alt="profile" aria-hidden="true" />
        {t('aboutpage.greetings.paras.1')}
      </p>
      <p className="about__myself__para">{t('aboutpage.greetings.paras.2')}</p>
      <p className="about__myself__para">{t('aboutpage.greetings.paras.3')}</p>
    </section>
  )
}

export default Myself
