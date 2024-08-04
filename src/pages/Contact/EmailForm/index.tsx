import { useTranslation } from 'react-i18next'
import Button from '@/components/Button'
import Field from '@/components/Field'
import './EmailForm.scss'

const EmailForm = () => {
  const { t } = useTranslation('global')
  return (
    <form className="emailForm">
      <Field label={t('emailForm.1')} />
      <Field label="Email" />
      <Field label={t('emailForm.2')} />
      <Field label={t('emailForm.3')} />
      <Button type="submit">{t('emailForm.button')}</Button>
    </form>
  )
}

export default EmailForm
