import { useTranslation } from 'react-i18next'
import EventMarker from './EventMarker'
import './Timeline.scss'

const Timeline = () => {
  const { t } = useTranslation('global')

  return (
    <section className="timeline">
      <h2 className="timeline__sub">{t('aboutpage.timeline.title')}</h2>
      <div className="timeline__container">
        <EventMarker
          title={t('aboutpage.timeline.4.title')}
          subtitle={t('aboutpage.timeline.4.sub')}
          description={t('aboutpage.timeline.4.description')}
        />
        <EventMarker
          title={t('aboutpage.timeline.3.title')}
          subtitle={t('aboutpage.timeline.3.sub')}
          description={t('aboutpage.timeline.3.description')}
          position="right"
        />
        <EventMarker
          title={t('aboutpage.timeline.2.title')}
          subtitle={t('aboutpage.timeline.2.sub')}
          description={t('aboutpage.timeline.2.description')}
        />
        <EventMarker
          title={t('aboutpage.timeline.1.title')}
          subtitle={t('aboutpage.timeline.1.sub')}
          description={t('aboutpage.timeline.1.description')}
          position="right"
        />
      </div>
    </section>
  )
}

export default Timeline
