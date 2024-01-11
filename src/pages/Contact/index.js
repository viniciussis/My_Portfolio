import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import Field from '../../components/Field'
import Dropdown from '../../components/Dropdown'
import SocialMedia from '../../components/SocialMedia';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  const serviceID = 'service_2ebhax7';
  const templateID = 'template_0rttn6e';
  const publicKey = 'XkNMkZdJ0QrfOEExo';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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
        console.log('Successful contact: ', result.text);
        clearFormFields();
      }, (error) => {
        console.log('Error sending the e-mail: ', error.text);
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
          value={subject}
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
    </div>
  )
}

export default Contact