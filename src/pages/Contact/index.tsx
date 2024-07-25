import SocialMedia from '../../components/SocialMedia'
import ContactForm from './Form'
import './Contact.scss'

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__title">Contato</h2>
      <ContactForm />
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
