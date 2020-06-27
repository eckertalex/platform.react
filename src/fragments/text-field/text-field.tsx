import React from 'react'
/* -------------------------------------------------------------------------- */

type TextFieldProps = {
  id: string
  label: string
  placeholder: string
  type?: string
}

export default function TextField(props: TextFieldProps) {
  const { id, label, placeholder, type } = props

  return (
    <>
      <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </>
  )
}

TextField.defaultProps = {
  type: 'text',
}
