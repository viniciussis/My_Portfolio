import { useTranslation } from 'react-i18next'
import './SoftSkills.scss'
import AnimatedCircle from '@/components/AnimatedCircle'

const SoftSkills = () => {
  const { t } = useTranslation('global')

  return (
    <section className="softSkills">
      <h2 className="softSkills__title">{t('skillsPage.softskills.title')}</h2>
      <h3 className="softSkills__sub">{t('skillsPage.softskills.subtitle')}</h3>
      <AnimatedCircle label="Smart" />
    </section>
  )
}

export default SoftSkills
