import React from 'react'
import classNames from 'classnames'
/* -------------------------------------------------------------------------- */

type OutlinedButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  lg?: boolean
  className?: string
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export default function OutlinedButton(props: OutlinedButtonProps) {
  const { children, onClick: handleClick, lg, className, type } = props

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'shadow bg-transparent hover:bg-primary-500 text-primary-700 font-semibold rounded hover:text-white border border-primary-500 hover:border-transparent',
        {
          'py-4 px-6': lg,
          'py-2 px-4': !lg,
          [`${className}`]: className,
        }
      )}
      type={type}
    >
      {children}
    </button>
  )
}

OutlinedButton.defaultProps = {
  onClick: () => {},
  lg: false,
  outline: false,
  className: '',
  type: 'button',
}
