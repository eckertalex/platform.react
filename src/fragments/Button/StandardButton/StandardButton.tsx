import React from 'react'
import classNames from 'classnames'
/* -------------------------------------------------------------------------- */

type StandardButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  lg?: boolean
  className?: string
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export default function StandardButton(props: StandardButtonProps) {
  const { children, onClick: handleClick, lg, className, type } = props

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'shadow bg-primary-500 hover:bg-primary-700 text-white font-bold rounded focus:outline-none focus:shadow-outline',
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

StandardButton.defaultProps = {
  onClick: () => {},
  lg: false,
  outline: false,
  className: '',
  type: 'button',
}
