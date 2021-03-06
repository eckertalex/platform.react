import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Illustration404 from 'pages/not-found-page/illustration-404'
import { home, appHome } from 'routes/routes'
import SEO from 'fragments/seo/seo'
import { useAuth } from 'context/auth-context'
/* -------------------------------------------------------------------------- */

export default function NotFoundPage() {
  const { t } = useTranslation()
  const {
    state: { isAuthenticated },
  } = useAuth()

  return (
    <>
      <SEO
        helmetTitle={t('NotFoundPage.title', '404 Page not found')}
        helmetDescription={t('NotFoundPage.description', '404 Page not found')}
      />
      <main className="h-screen bg-gray-200">
        <div className="container mx-auto pb-6 pt-6 md:pt-16">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm">
            <div className="w-full p-8">
              <div className="flex justify-center mb-4">
                <Illustration404 />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg text-center font-semibold mb-2">
                  {t('NotFoundPage.looksLikeYouAreLost', "Looks like you've got lost...")}
                </p>
                <Link to={isAuthenticated ? appHome() : home()} className="btn btn-primary">
                  {t('NotFoundPage.back', 'Back')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
