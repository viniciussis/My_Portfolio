import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import Field from '../../components/Field'
import Dropdown from '../../components/Dropdown'
import SocialMedia from '../../components/SocialMedia';
import Modal from '../../components/Modal';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  const serviceID = process.env.SERVICE_ID
  const templateID = process.env.TEMPLATE_ID;
  const publicKey = process.env.PUBLIC_KEY;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const switchModal = () => {
    setModal(!modal);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        serviceID,
        templateID,
        { name, email, subject, message },
        publicKey
      )
      .then((result) => {
        setModalTitle('Sucessful contact! ', result)
        setModalMessage('O email foi enviado com sucesso!!')
        switchModal();        
        clearFormFields();
      }, (error) => {
        setModalTitle('Error sending the e-mail! ', error)
        setModalMessage('Ouve uma falha no envio do email!!')
        switchModal();        
      }
      );
  };

  const clearFormFields = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className={`contact ${isDarkMode ? '' : 'contact--light'}`}>
      <form className='contact__form' onSubmit={sendEmail} >
        <h2 className='contact__form__title'>{language === 'pt' ? 'Contato' : 'Contact'}</h2>
        <Field
          value={name}
          mandatory
          onChange={(e) => setName(e.target.value)}
          label={language === 'pt' ? 'Nome' : 'Name'}
          placeholder={language === 'pt' ? 'Digite seu nome...' : 'Type your name...'}
        />
        <Field
          value={email}
          mandatory
          onChange={(e) => setEmail(e.target.value)}
          label='Email'
          type='email'
          placeholder={language === 'pt' ? 'Digite seu email...' : 'Type your email...'}
        />
        <Dropdown
          mandatory
          onChange={(e) => setSubject(e.target.value)}
          label={language === 'pt' ? 'Motivo do contato' : 'Reason for contact'}
        />
        <Field
          value={message}
          mandatory
          onChange={(e) => setMessage(e.target.value)}
          label={language === 'pt' ? 'Descrição' : 'Description'}
          placeholder={language === 'pt' ? 'Em que posso ajudá-lo?' : 'How Can I help you?'}
        />
        <button className='contact__button' type='submit'>{language === 'pt' ? 'Enviar' : 'Send'}</button>
      </form>
      <div className='contact__media'>
        <h3 className='contact__subtitle'>{language === 'pt' ? 'Email para Contato' : 'Contact email'}</h3>
        <p className='contact__para'>vinicius01012@gmail.com</p>
        <h3 className='contact__subtitle'>{language === 'pt' ? 'Adicione nas redes' : 'Social media'}</h3>
        <SocialMedia />
      </div>
      <Modal
        switching={modal}
        title={modalTitle}
        message={modalMessage}
        onSwitching={switchModal}
      />
    </div>
  )
}

export default Contact