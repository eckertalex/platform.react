import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import menuConfig from 'layouts/landing-page-layout/menuConfig'
import { useAuth } from 'context/auth-context'
import { signIn, appHome } from 'routes/routes'
/* -------------------------------------------------------------------------- */

export default function DesktopMenu() {
  const { t } = useTranslation()
  const {
    state: { isAuthenticated },
  } = useAuth()

  return (
    <div className="hidden md:block md:ml-10 md:pr-4">
      {menuConfig(t).map((e) => {
        const className =
          'ml-8 font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out'

        if (!e.path) {
          return (
            <button key={e.id} type="button" className={className}>
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
      <Link
        to={isAuthenticated ? appHome() : signIn()}
        className="ml-8 font-medium text-primary-600 hover:text-primary-800 focus:outline-none focus:text-primary-800 transition duration-150 ease-in-out"
      >
        {isAuthenticated ? t('DesktopMenu.dashboard', 'Dashboard') : t('DesktopMenu.signIn', 'Sign In')}
      </Link>
    </div>
  )
}
