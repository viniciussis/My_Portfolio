import React from 'react'
import './Field.scss'

interface FieldProps {
  type?: 'text' | 'number'
  placeholder: string
  mandatory?: boolean
  label: string
}

const Field: React.FC<FieldProps> = ({
  type = 'text',
  mandatory = false,
  label,
  placeholder,
}) => {
  return (
    <div className="field">
      <label className="field__label">{label}</label>
      <input
        className="field__input"
        type={type}
        required={mandatory}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Field
