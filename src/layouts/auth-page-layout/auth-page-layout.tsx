import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import LogoPlatformReact from 'assets/svg/logo-platform-react'
import { home } from 'routes/routes'
/* -------------------------------------------------------------------------- */

export default function AuthPageLayout() {
  const { t } = useTranslation()

  return (
    <main className="h-screen bg-gray-200">
      <div className="container mx-auto pb-6 pt-6 md:pt-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm">
          <div className="w-full p-8">
            <Link to={home()} className="flex items-center justify-center pb-2">
              <LogoPlatformReact />
            </Link>
            <Outlet />
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy; {t('AuthPageLayout.copyright', '2020 eckertalex. All rights reserved.')}
      </p>
    </main>
  )
}
