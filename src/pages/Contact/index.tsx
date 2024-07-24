import Field from '@/components/Field'
import SocialMedia from '../../components/SocialMedia'
import './Contact.scss'
import Modal from '@/components/Modal'
import Dropdown from '@/components/Dropdown'

const Contact = () => {
  return (
    <div className={`contact contact--light`}>
      <form className="contact__form">
        <h2 className="contact__form__title">Contato</h2>
        <Field mandatory />
        <Field mandatory type="email" />
        <Dropdown />
        <Field mandatory />
        <button className="contact__button" type="submit">
          Enviar
        </button>
      </form>
      <div className="contact__media">
        <h3 className="contact__subtitle">Email para Contato</h3>
        <p className="contact__para">vinicius01012@gmail.com</p>
        <h3 className="contact__subtitle">Adicione nas redes</h3>
        <SocialMedia />
      </div>
      <Modal />
    </div>
  )
}

export default Contact
