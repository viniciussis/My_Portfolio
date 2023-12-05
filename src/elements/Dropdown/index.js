import './Dropdown.css'

const Dropdown = ({ value, mandatory, label, itens }) => {
  return (
    <div className='dropdown'>
      <label htmlFor={label} >{label}</label>
      <select value={value} id={label} required={mandatory} >
        <option disabled style={{display:'none'}} ></option>
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown