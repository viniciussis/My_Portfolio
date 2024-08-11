import { forwardRef, InputHTMLAttributes } from 'react'
import './AreaField.scss'

interface AreaFieldProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  errors?: string
}

const AreaField = forwardRef<HTMLTextAreaElement, AreaFieldProps>(
  ({ required = false, label, errors, ...rest }, ref) => {
    return (
      <label className="areafield">
        <textarea
          placeholder=""
          className="areafield__input"
          required={required}
          ref={ref}
          {...rest}
        />
        <span className="areafield__label">{label}</span>
        {errors && <span className="areafield__error">{errors}</span>}
      </label>
    )
  },
)

export default AreaField
