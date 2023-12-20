import Field from '../Field'
import Dropdown from '../Dropdown'
import Button from '../Button'
import './Form.css'

const Form = () => {
  return (
    <div className='forms'>      
      <form onSubmit = {''} >
        <h2>CONTACT</h2>
        <Field type='text' value={''} mandatory label='Nome'
          placeholder='Digite seu nome...'/>
        <Field type='text' value={''} mandatory label='Email'
          placeholder='Digite seu email...'/>
        <Dropdown value={''} mandatory 
          label='Motivo do contato'/>
        <Field type='text' value={''} label='Descrição' 
          placeholder='Em que posso ajudá-lo...'/>
        <Button>Enviar</Button>
      </form>
    </div>
  )
}

export default Form