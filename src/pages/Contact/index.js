import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import Field from '../../components/Field'
import Dropdown from '../../components/Dropdown'
import Button from '../../components/Button';
import SocialMedia from '../../components/SocialMedia';
import './Contact.css'

const Contact = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`contact ${isDarkMode ? '' : 'contact--light'}`}>
      <form className='contact__form' onSubmit={''} >
        <h2 className='contact__form__title'>{language === 'pt' ? 'Contato' : 'Contact'}</h2>
        <Field
          type='text'
          value={''}
          mandatory
          label={language === 'pt' ? 'Nome' : 'Name'}
          placeholder={language === 'pt' ? 'Digite seu nome...' : 'Type your name...'}
        />
        <Field
          type='text'
          value={''}
          mandatory
          label='Email'
          placeholder={language === 'pt' ? 'Digite seu email...' : 'Type your email...'}
        />
        <Dropdown
          value={''}
          mandatory
          label={language === 'pt' ? 'Motivo do contato' : 'Reason for contact'}
          placeholder={language === 'pt' ? 'Selecione uma opção...' : 'Select an option...'}
        />
        <Field
          type='text'
          value={''}
          label={language === 'pt' ? 'Descrição' : 'Description'}
          placeholder={language === 'pt' ? 'Em que posso ajudá-lo?' : 'How Can I help you?'}
        />
        <Button>{language === 'pt' ? 'Enviar' : 'Send'}</Button>
      </form>
      <div className='contact__media'>
        <h3 className='contact__subtitle'>{language === 'pt' ? 'Email para Contato' : 'Contact email'}</h3>
        <p className='contact__para'>vinicius01012@gmail.com</p>
        <h3 className='contact__subtitle'>{language === 'pt' ? 'Adicione nas redes' : 'Social media'}</h3>
        <SocialMedia />
      </div>
    </div>
  )
}

/*
*/

export default Contact