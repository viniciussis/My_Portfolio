import './Field.css';

const Field = ({ type = 'text', label, placeholder, mandatory = false, value }) => {

  return (
    <div className={`field field-${type}`}>
      <label htmlFor={label}>{label}</label>
      <input className='field' 
        type={type} 
        value={value} 
        id={label} 
        required={mandatory} 
        placeholder={`${placeholder}`}/>
    </div>
  )
}

export default Field