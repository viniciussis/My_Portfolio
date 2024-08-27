import { useTranslation } from 'react-i18next'
import './Timeline.scss'

const Timeline = () => {
  const { t } = useTranslation('global')

  return (
    <section className="about__education">
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2>{t('aboutpage.timeline.1.title')}</h2>
            <h3>{t('aboutpage.timeline.1.sub')}</h3>
            <p>{t('aboutpage.timeline.1.description')}</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>{t('aboutpage.timeline.2.title')}</h2>
            <h3>{t('aboutpage.timeline.2.sub')}</h3>
            <p>{t('aboutpage.timeline.2.description')}</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>{t('aboutpage.timeline.3.title')}</h2>
            <h3>{t('aboutpage.timeline.3.sub')}</h3>
            <p>{t('aboutpage.timeline.3.description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
