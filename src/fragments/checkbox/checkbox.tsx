import React from 'react'
import classNames from 'classnames'
/* -------------------------------------------------------------------------- */

type CheckboxProps = {
  label: string
  colorClass?: string
}

export default function Checkbox(props: CheckboxProps) {
  const { label, colorClass } = props

  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className={classNames('form-checkbox h-6 w-6', {
          [`${colorClass}`]: !!colorClass,
        })}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  )
}

Checkbox.defaultProps = {
  colorClass: 'text-gray-600',
}
