import React from 'react'
import { useTranslation } from 'react-i18next'

import SEO from 'fragments/seo/seo'
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        helmetTitle={t('AboutPage.title', 'About')}
        helmetDescription={t('AboutPage.description', 'About page of platform.react')}
      />
      <h1>{t('AboutPage.title')}</h1>
    </>
  )
}
