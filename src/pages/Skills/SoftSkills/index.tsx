import AnimatedCircle from '@/components/AnimatedCircle'
import { useTranslation } from 'react-i18next'
import './SoftSkills.scss'

const SoftSkills = () => {
  const { t } = useTranslation('global')

  return (
    <>
      <h2 className="sub">{t('skillsPage.softskills.title')}</h2>
      <section className="softSkills">
        <h3 className="softSkills__sub">
          {t('skillsPage.softskills.subtitle')}
        </h3>
        <div className="softSkills__container">
          <AnimatedCircle label="Communication" />
          <AnimatedCircle label="Problem Solving" />
          <AnimatedCircle label="Teamwork" />
          <AnimatedCircle label="Adaptability" />
          <AnimatedCircle label="Time Management" />
          <AnimatedCircle label="Initiative" />
          <AnimatedCircle label="Continuous Learning" />
          <AnimatedCircle label="Attention to Detail" />
          <AnimatedCircle label="Critical Thinking" />
          <AnimatedCircle label="Leadership" />
        </div>
      </section>
    </>
  )
}

export default SoftSkills
