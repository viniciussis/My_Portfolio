import './Dropdown.scss'

const Dropdown = () => {
  return (
    <div className="dropdown">
      <label className="dropdown__label"></label>
      <select
        className={`dropdown__select dropdown__select--light`}
        defaultValue=""
      >
        <option value="" disabled style={{ display: 'none' }}>
          Escolha uma opção...
        </option>
        <option value="Contratação">Contratação</option>
        <option value="Dúvidas">Dúvidas</option>
        <option value="Parcerias">Parcerias</option>
        <option value="Outros">Outros</option>
      </select>
    </div>
  )
}

export default Dropdown
