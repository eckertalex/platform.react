import React from 'react'
import { useTranslation } from 'react-i18next'

import AppPageLayout from 'layouts/AppPageLayout/AppPageLayout'
/* -------------------------------------------------------------------------- */

export default function SettingsPage() {
  const { t } = useTranslation()

  return (
    <AppPageLayout
      helmetTitle={t('SettingsPage.title', 'Settings')}
      helmetDescription={t('SettingsPage.description', 'Settings of platform.react')}
    >
      <h1>{t('SettingsPage.title', 'Settings')}</h1>
    </AppPageLayout>
  )
}
