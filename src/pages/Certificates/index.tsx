import { animate, motion, useMotionValue } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

import { FAST_DURATION, SLOW_DURATION } from '@/shared/animations'
import ImageCard from '@/components/ImageCard'
import './Certificates.scss'

const Certificates = () => {
  const images = Array.from(
    { length: 24 },
    (_, i) => `images/certificates/${i + 1}.png`,
  )
  const [duration, setDuration] = useState(FAST_DURATION)
  const [mustFinish, setMustFinish] = useState(false)
  const [rerender, setRerender] = useState(false)
  const { t } = useTranslation('global')
  const xTranslation = useMotionValue(0)
  const [ref, { width }] = useMeasure()

  useEffect(() => {
    let controls
    const finalPosition = -width / 2 - 8

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        },
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeatDelay: 0,
        repeat: Infinity,
        repeatType: 'loop',
      })
    }

    return controls?.stop
  }, [xTranslation, width, duration, mustFinish, rerender])

  return (
    <div className="certificates">
      <h1 className="certificates__title">{t('headerMenu.2')}</h1>
      <motion.div
        onHoverStart={() => {
          setDuration(SLOW_DURATION)
          setMustFinish(true)
        }}
        onHoverEnd={() => {
          setDuration(FAST_DURATION)
          setMustFinish(true)
        }}
        className="certificates__section"
        style={{ x: xTranslation }}
        ref={ref}
      >
        {[...images, ...images].map((image, index) => (
          <ImageCard image={image} key={index} />
        ))}
      </motion.div>
    </div>
  )
}

export default Certificates
