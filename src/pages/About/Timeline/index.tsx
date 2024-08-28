import { useTranslation } from 'react-i18next'
import './Timeline.scss'

const Timeline = () => {
  const { t } = useTranslation('global')

  return (
    <section className="timeline">
      <h2 className="timeline__sub">{t('aboutpage.timeline.title')}</h2>
      <div className="timeline__container">
        <div className="timeline__container__record timeline__container__record--left">
          <div className="timeline__container__record__content">
            <h2 className="timeline__container__record__content__title">
              {t('aboutpage.timeline.1.title')}
            </h2>
            <h3 className="timeline__container__record__content__sub">
              {t('aboutpage.timeline.1.sub')}
            </h3>
            <p className="timeline__container__record__content__para">
              {t('aboutpage.timeline.1.description')}
            </p>
          </div>
        </div>
        <div className="timeline__container__record timeline__container__record--right">
          <div className="timeline__container__record__content">
            <h2 className="timeline__container__record__content__title">
              {t('aboutpage.timeline.2.title')}
            </h2>
            <h3 className="timeline__container__record__content__sub">
              {t('aboutpage.timeline.2.sub')}
            </h3>
            <p className="timeline__container__record__content__para">
              {t('aboutpage.timeline.2.description')}
            </p>
          </div>
        </div>
        <div className="timeline__container__record timeline__container__record--left">
          <div className="timeline__container__record__content">
            <h2 className="timeline__container__record__content__title">
              {t('aboutpage.timeline.3.title')}
            </h2>
            <h3 className="timeline__container__record__content__sub">
              {t('aboutpage.timeline.3.sub')}
            </h3>
            <p className="timeline__container__record__content__para">
              {t('aboutpage.timeline.3.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
