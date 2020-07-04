import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { signIn } from 'routes/routes'
import SEO from 'fragments/seo/seo'
/* -------------------------------------------------------------------------- */

export default function LandingPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        helmetTitle={t('LandingPage.title', 'Home')}
        helmetDescription={t('LandingPage.description', 'Home Page of platform.react')}
      />
      <div className="bg-gray-100">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            {t('LandingPage.ctaQuestion', 'Ready to dive in?')}
            <br />
            <span className="text-primary-500">{t('LandingPage.ctaInvitation', 'Start your free trial today.')}</span>
          </h2>
          <div className="mt-8 flex space-x-3 lg:flex-shrink-0 lg:mt-0">
            <Link to={signIn()} className="btn btn-lg btn-primary">
              {t('LandingPage.getStarted', 'Get started')}
            </Link>
            <Link to={signIn()} className="btn btn-lg btn-primary-outline">
              {t('LandingPage.liveDemo', 'Live demo')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
