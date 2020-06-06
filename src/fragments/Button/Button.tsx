import React from 'react'

import OutlinedButton from 'fragments/Button/OutlinedButton/OutlinedButton'
import StandardButton from 'fragments/Button/StandardButton/StandardButton'
/* -------------------------------------------------------------------------- */

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  lg?: boolean
  outlined?: boolean
  className?: string
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export default function Button(props: ButtonProps) {
  const { children, onClick: handleClick, lg, outlined, type, className } = props

  return outlined ? (
    <OutlinedButton onClick={handleClick} lg={lg} type={type} className={className}>
      {children}
    </OutlinedButton>
  ) : (
    <StandardButton onClick={handleClick} lg={lg} type={type} className={className}>
      {children}
    </StandardButton>
  )
}

Button.defaultProps = {
  onClick: () => {},
  lg: false,
  outlined: false,
  className: '',
  type: 'button',
}
