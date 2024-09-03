import { useTranslation } from 'react-i18next'
import './Stack.scss'

const Stack = () => {
  const { t } = useTranslation('global')
  return (
    <section>
      <h2 className="sub">{t('skillsPage.stack.subtitle')}</h2>
    </section>
  )
}

export default Stack
