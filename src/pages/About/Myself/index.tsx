import { useTranslation } from 'react-i18next'
import './Myself.scss'

const Myself = () => {
  const { t } = useTranslation('global')
  return (
    <section className="myself">
      <img
        className="myself__photo"
        src="images/common/profile.jpg"
        alt="profile"
        aria-hidden="true"
      />
      <p className="myself__para">{t('aboutpage.greetings.paras.1')} </p>
      <p className="myself__para">{t('aboutpage.greetings.paras.2')} </p>
      <p className="myself__para">{t('aboutpage.greetings.paras.3')} </p>
    </section>
  )
}

export default Myself
