import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import EventMarker from './EventMarker'
import './Timeline.scss'

const Timeline = () => {
  const { t } = useTranslation('global')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  })

  return (
    <section className="timeline" ref={containerRef}>
      <h2 className="timeline__sub">{t('aboutpage.timeline.title')}</h2>
      <div className="timeline__container">
        <div className="timeline__line-bg"></div>
        <motion.div
          className="timeline__line"
          style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
        />
        <EventMarker
          title={t('aboutpage.timeline.5.title')}
          subtitle={t('aboutpage.timeline.5.sub')}
          description={t('aboutpage.timeline.5.description')}
        />
        <EventMarker
          title={t('aboutpage.timeline.4.title')}
          subtitle={t('aboutpage.timeline.4.sub')}
          description={t('aboutpage.timeline.4.description')}
          position="right"
        />
        <EventMarker
          title={t('aboutpage.timeline.3.title')}
          subtitle={t('aboutpage.timeline.3.sub')}
          description={t('aboutpage.timeline.3.description')}
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
