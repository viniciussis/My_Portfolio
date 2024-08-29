import { useTranslation } from 'react-i18next'
import './Hobbies.scss'

const Hobbies = () => {
  const { t } = useTranslation('global')
  return (
    <section className="hobbies">
      <h2 className="hobbies__sub">Hobbies</h2>
      <p className="hobbies__para">{t('aboutpage.hobbies.sub')}</p>
      <p className="hobbies__para">
        <strong className='hobbies__para__label'>{t('aboutpage.hobbies.1.label')}</strong>
        {t('aboutpage.hobbies.1.value')}
      </p>
      <p className="hobbies__para">
        <strong className='hobbies__para__label'>{t('aboutpage.hobbies.2.label')}</strong>
        {t('aboutpage.hobbies.2.value')}
      </p>
      <p className="hobbies__para">
        <strong className='hobbies__para__label'>{t('aboutpage.hobbies.3.label')}</strong>
        {t('aboutpage.hobbies.3.value')}
      </p>
      <p className="hobbies__para">
        <strong className='hobbies__para__label'>{t('aboutpage.hobbies.4.label')}</strong>
        {t('aboutpage.hobbies.4.value')}
      </p>
    </section>
  )
}

export default Hobbies
