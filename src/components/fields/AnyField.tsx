// Solution 2 for multiple fields
import React, { useState } from 'react'

import { FieldDefaultProps, FieldProps } from '../../types'

type AnyFieldProps = FieldProps

function AnyField({ name, initialValue, onChange }: AnyFieldProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e)
  }

  return (
    <input
      type="any"
      name={name}
      className="block w-full rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none"
      value={value}
      onChange={handleChange}
    />
  )
}

AnyField.defaultProps = FieldDefaultProps

export default AnyField