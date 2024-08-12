import { useTranslation } from 'react-i18next'
import AreaField from '@/components/AreaField'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
import Field from '@/components/Field'
import './EmailForm.scss'

interface EmailForm {
  name: string
  email: string
  subject: string
  message: string
}

const EmailForm = () => {
  const { t } = useTranslation('global')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailForm>()

  const onSubmit = (data: EmailForm) => {
    console.log(data)
  }

  return (
    <>
      <form className="emailForm" noValidate onSubmit={handleSubmit(onSubmit)}>
        <p className="emailForm__sub">{t('contact.sub1')}</p>
        <Field
          label={t('emailForm.name.label')}
          {...register('name', { required: t('emailForm.name.errors.1') })}
          errors={errors.name?.message}
        />
        <Field
          label="Email"
          {...register('email', { required: t('emailForm.email.errors.1') })}
          errors={errors.email?.message}
        />
        <Field
          label={t('emailForm.subject.label')}
          {...register('subject', {
            required: t('emailForm.subject.errors.1'),
          })}
          errors={errors.subject?.message}
        />
        <AreaField
          label={t('emailForm.message.label')}
          {...register('message', {
            required: t('emailForm.message.errors.1'),
          })}
          errors={errors.message?.message}
        />
        <Button type="submit">{t('emailForm.button')}</Button>
      </form>
    </>
  )
}

export default EmailForm
