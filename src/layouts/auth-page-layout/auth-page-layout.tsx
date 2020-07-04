import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import LogoPlatformReact from 'assets/svg/logo-platform-react'
import { home } from 'routes/routes'
import SEO from 'fragments/seo/seo'
/* -------------------------------------------------------------------------- */

type AuthPageLayoutProps = {
  children: React.ReactNode
  helmetTitle: string
  helmetDescription: string
}

export default function AuthPageLayout(props: AuthPageLayoutProps) {
  const { t } = useTranslation()
  const { helmetTitle, helmetDescription, children } = props

  return (
    <>
      <SEO helmetTitle={helmetTitle} helmetDescription={helmetDescription} />
      <main className="h-screen bg-gray-200">
        <div className="container mx-auto pb-6 pt-6 md:pt-16">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm">
            <div className="w-full p-8">
              <Link to={home()} className="flex items-center justify-center pb-2">
                <LogoPlatformReact />
              </Link>
              {children}
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy; {t('AuthPageLayout.copyright', '2020 eckertalex. All rights reserved.')}
        </p>
      </main>
    </>
  )
}
