import SocialMedia from '../../components/SocialMedia'
import { useTranslation } from 'react-i18next'
import EmailForm from './EmailForm'
import './Contact.scss'

const Contact = () => {
  const { t } = useTranslation('global')
  return (
    <main className="contact">
      <h2 className="contact__title">{t('headerMenu.3')}</h2>
      <EmailForm />
      <div className="contact__media">
        <h3 className="contact__media__sub">{t('contact.sub2')}</h3>
        <p className="contact__media__para">vinicius01012@gmail.com</p>
        <h3 className="contact__media__sub">{t('contact.sub3')}</h3>
        <SocialMedia />
      </div>
    </main>
  )
}

export default Contact
