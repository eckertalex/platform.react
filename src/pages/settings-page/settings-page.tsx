import React from 'react'
import { useTranslation } from 'react-i18next'

import SEO from 'fragments/seo/seo'
/* -------------------------------------------------------------------------- */

export default function SettingsPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        helmetTitle={t('SettingsPage.title', 'Settings')}
        helmetDescription={t('SettingsPage.description', 'Settings of platform.react')}
      />
      <h1>{t('SettingsPage.title', 'Settings')}</h1>
    </>
  )
}
