import React from 'react'
import './Field.scss'

interface FieldProps {
  type?: 'text' | 'number'
  textArea?: boolean
  mandatory?: boolean
  label: string
}

const Field: React.FC<FieldProps> = ({
  mandatory = false,
  textArea = false,
  type = 'text',
  label,
}) => {
  return (
    <label className="field">
      {textArea ? (
        <textarea className="field__input" maxLength={400} required />
      ) : (
        <input className="field__input" type={type} required={mandatory} />
      )}
      <span className="field__label">{label}</span>
    </label>
  )
}

export default Field
