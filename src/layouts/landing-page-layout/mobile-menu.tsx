import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { X as XIcon } from 'react-feather'
import classNames from 'classnames'

import LogoPlatformReact from 'assets/svg/logo-platform-react'
import { signIn, appHome } from 'routes/routes'
import useClickOutside from 'hooks/use-click-outside'
import { useAuth } from 'context/auth-context'
import menuConfig from 'layouts/landing-page-layout/menuConfig'
/* -------------------------------------------------------------------------- */

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu(props: MobileMenuProps) {
  const { open, onClose: handleClose } = props
  const {
    state: { isAuthenticated },
  } = useAuth()
  const ref = React.useRef(null)
  useClickOutside([ref], handleClose)
  const { t } = useTranslation()

  return (
    <div
      ref={ref}
      className={classNames('absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden', {
        hidden: !open,
      })}
    >
      <div className="rounded-lg shadow-md">
        <div className="rounded-lg bg-white shadow-xs overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div className="h-8 w-auto">
              <LogoPlatformReact />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <XIcon />
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3">
            {menuConfig(t).map((e) => {
              const className =
                'block px-3 py-2 rounded-md text-base font-medium text-gray-700 w-full text-left hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out'

              if (!e.path) {
                return (
                  <button key={e.id} type="button" onClick={handleClose} className={className}>
                    {e.label}
                  </button>
                )
              }

              return (
                <Link key={e.id} to={e.path} className={className}>
                  {e.label}
                </Link>
              )
            })}
          </div>
          <div>
            <Link
              to={isAuthenticated ? appHome() : signIn()}
              className="block w-full px-5 py-3 text-center font-medium text-primary-600 bg-gray-100 hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:bg-gray-100 focus:text-primary-700 transition duration-150 ease-in-out"
            >
              {isAuthenticated ? t('MobileMenu.dashboard', 'Dashboard') : t('MobileMenu.signIn', 'Sign In')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
