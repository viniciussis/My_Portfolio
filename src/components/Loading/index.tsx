import { LinearProgress } from '@mui/material'
import './Loading.scss'
import { useTranslation } from 'react-i18next'

const Loading = () => {
  const { t } = useTranslation('global')
  return (
    <div className="loading">
      <h1 className="loading__title">{t('loading.1')}</h1>
      <LinearProgress color="success" />
    </div>
  )
}

export default Loading
