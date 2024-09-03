import { useTranslation } from 'react-i18next'
import './SoftSkills.scss'

const SoftSkills = () => {
  const { t } = useTranslation('global')

  return (
    <section>
      <h2 className="sub">{t('skillsPage.softskills.subtitle')}</h2>
    </section>
  )
}

export default SoftSkills
