import { useTranslation } from 'react-i18next'
import z from 'zod'

export const useEmailSchema = () => {
  const { t } = useTranslation('global')

  return z.object({
    name: z.string().min(1, t('emailForm.name.errors.1')),
    email: z.string().email(t('emailForm.email.errors.1')),
    subject: z.string().min(1, t('emailForm.subject.errors.1')),
    message: z.string().min(1, t('emailForm.message.errors.1')),
  })
}

export type Email = z.infer<ReturnType<typeof useEmailSchema>>
