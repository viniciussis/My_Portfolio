import AnimatedCircle from '@/components/AnimatedCircle'
import { useTranslation } from 'react-i18next'
import './SoftSkills.scss'

const SoftSkills = () => {
  const softskills = Array.from({ length: 10 }, (_, i) => `${i + 1}`)
  const { t } = useTranslation('global')

  return (
    <>
      <h2 className="sub">{t('skillsPage.softskills.title')}</h2>
      <section className="softSkills">
        <h3 className="softSkills__sub">
          {t('skillsPage.softskills.subtitle')}
        </h3>
        <div className="softSkills__container">
          {softskills.map((softskill, index) => (
            <AnimatedCircle
              label={t(`skillsPage.softskills.${softskill}`)}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default SoftSkills
