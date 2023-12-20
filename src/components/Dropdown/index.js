import './Dropdown.css'

const Dropdown = ({ value, mandatory, label }) => {
  return (
    <div className='dropdown'>
      <label htmlFor={label} >{label}</label>
      <select value={value} id={label} required={mandatory} >
        <option disabled style={{display:'none'}}>Escolha uma opção</option>
      </select>
    </div>
  )
}

export default Dropdown