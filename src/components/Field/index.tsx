import './Field.scss'

const Field = ({ type = 'text', mandatory = false }) => {
  return (
    <div className="field">
      <label className="field__label"></label>
      <input
        className={`field__input field__input--light`}
        type={type}
        required={mandatory}
        placeholder=""
      />
    </div>
  )
}

export default Field
