import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

import { SERVICE_ID, TEMPLATE_ID, EMAILJS_KEY } from '@/shared/constants'
import { Email, useEmailSchema } from '@/shared/schemas'
import AreaField from '@/components/AreaField'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import Field from '@/components/Field'
import './EmailForm.scss'
import { AnimatePresence } from 'framer-motion'

type EmailForm = Record<string, unknown> & Email

const EmailForm = () => {
  const { t } = useTranslation('global')
  const emailSchema = useEmailSchema()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<EmailForm>({
    defaultValues: {
      email: '',
      message: '',
      name: '',
      subject: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(emailSchema),
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit = (data: EmailForm) => {
    // emailjs.send(SERVICE_ID, TEMPLATE_ID, data, EMAILJS_KEY)
    console.log(data, SERVICE_ID, TEMPLATE_ID, EMAILJS_KEY, emailjs, reset)
    reset()
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      setIsModalOpen(true)
    }
  }, [isSubmitSuccessful])

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
        <Button
          text={t('emailForm.button')}
          disabled={!isDirty || !isValid || isSubmitting}
          type="submit"
        />
      </form>
      <AnimatePresence initial={false} mode="wait">
        {isModalOpen && (
          <Modal
            onClick={() => setIsModalOpen(!isModalOpen)}
            title={t('modal.title')}
            message={t('modal.message')}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default EmailForm
