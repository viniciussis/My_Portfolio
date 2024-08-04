import React from 'react'
import './Field.scss'

interface FieldProps {
  type?: 'text' | 'number'
  mandatory?: boolean
  label: string
}

const Field: React.FC<FieldProps> = ({
  mandatory = false,
  type = 'text',
  label,
}) => {
  return (
    <label className="field">
      <input className="field__input" type={type} required={mandatory} />
      <span className="field__label">{label}</span>
    </label>
  )
}

export default Field
