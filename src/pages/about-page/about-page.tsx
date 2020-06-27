import React from 'react'
import { useTranslation } from 'react-i18next'

import LandingPageLayout from 'layouts/landing-page-layout/landing-page-layout'
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <LandingPageLayout
      helmetTitle={t('AboutPage.title', 'About')}
      helmetDescription={t('AboutPage.description', 'About page of platform.react')}
    >
      <h1>{t('AboutPage.title')}</h1>
    </LandingPageLayout>
  )
}
