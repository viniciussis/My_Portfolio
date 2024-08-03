import Button from '@/components/Button'
import Field from '@/components/Field'
import './EmailForm.scss'

const EmailForm = () => {
  return (
    <form className="emailForm">
      <Field label="Nome" placeholder="Digite seu nome..." />
      <Button type="submit">Enviar</Button>
    </form>
  )
}

export default EmailForm
