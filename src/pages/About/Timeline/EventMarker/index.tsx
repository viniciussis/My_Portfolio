import './EventMarker.scss'

interface EventMarkerProps {
  title: string
  subtitle: string
  description: string
  position?: 'right' | 'left'
}

const EventMarker = ({
  title,
  subtitle,
  description,
  position = 'left',
}: EventMarkerProps) => {
  return (
    <div
      className={`eventMarker ${position == 'left' ? 'eventMarker--left' : ''}`}
    >
      <div className="eventMarker__content">
        <h2 className="eventMarker__content__title">{title}</h2>
        <h3 className="eventMarker__content__sub">{subtitle}</h3>
        <p className="eventMarker__content__para">{description}</p>
      </div>
    </div>
  )
}

export default EventMarker
