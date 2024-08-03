import SocialMedia from '../../components/SocialMedia'
import { useTranslation } from 'react-i18next'
import EmailForm from './EmailForm'
import './Contact.scss'

const Contact = () => {
  const { t } = useTranslation('global')
  return (
    <div className="contact">
      <h2 className="contact__title">{t('headerMenu.3')}</h2>
      <EmailForm />
      <div className="contact__media">
        <h3 className="contact__sub">Email para Contato</h3>
        <p className="contact__para">vinicius01012@gmail.com</p>
        <h3 className="contact__sub">Adicione nas redes</h3>
        <SocialMedia />
      </div>
    </div>
  )
}

export default Contact
