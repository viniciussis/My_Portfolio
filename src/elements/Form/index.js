import Field from '../Field'
import Dropdown from '../Dropdown'
import Button from '../Button'
import './Form.css'

const Form = (props) => {
  return (
    <div className='forms'>      
      <form onSubmit = {''} >
        <h2>Preencha os dados para criar o card...</h2>
        <Field type='text' value={''} mandatory label='Nome'
          placeholder='Digite seu nome...'/>
        <Field type='text' value={''} mandatory label='Cargo'
          placeholder='Digite seu cargo...'/>
        <Field type='text' value={''} label='Imagem' 
          placeholder='Informe o endereço da imagem...'/>
        <Dropdown value={''} mandatory 
          label='Time' itens={''}/>
        <Button>Criar card</Button>
      </form>
    </div>
  )
}

export default Form