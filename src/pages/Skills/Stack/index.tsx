import { carrouselSlideReverse } from '@/shared/animations'
import { motion, useAnimation } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import './Stack.scss'

const Stack = () => {
  const icons = Array.from(
    { length: 20 },
    (_, i) => `images/skills/${i + 1}.png`,
  )
  const controls = useAnimation()
  const { t } = useTranslation('global')

  useEffect(() => {
    controls.start('animate')
  }, [controls])

  return (
    <>
      <h2 className="sub">{t('skillsPage.stack.subtitle')}</h2>
      <motion.section
        className="stack"
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => controls.start('animate')}
      >
        <motion.div
          className="stack__slider"
          variants={carrouselSlideReverse}
          animate={controls}
          initial="initial"
        >
          {icons.map((image, index) => (
            <img src={image} key={index} width={100} height={100} />
          ))}
          {icons.map((image, index) => (
            <img src={image} key={index} width={100} height={100} />
          ))}
        </motion.div>
      </motion.section>
    </>
  )
}

export default Stack
