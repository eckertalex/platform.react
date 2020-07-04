import React from 'react'
/* -------------------------------------------------------------------------- */

type TextFieldProps = {
  id: string
  placeholder: string
  label?: string
  type?: string
}

TextField.defaultProps = {
  type: 'text',
}

export default function TextField(props: TextFieldProps) {
  const { id, label, placeholder, type } = props

  return (
    <>
      {label && (
        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </>
  )
}
