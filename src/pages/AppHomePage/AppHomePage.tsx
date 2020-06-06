import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { useAuth } from 'context/AuthContext'
import Button from 'fragments/Button/Button'
import AppPageLayout from 'layouts/AppPageLayout/AppPageLayout'
import { home } from 'routes/routes'
/* -------------------------------------------------------------------------- */

export default function AppHomePage() {
  const { t } = useTranslation()
  const { dispatch } = useAuth()
  const navigate = useNavigate()

  return (
    <AppPageLayout
      helmetTitle={t('AppHomePage.title', 'Home')}
      helmetDescription={t('AppHomePage.description', 'Home Page of platform.react')}
    >
      <h1>{t('AppHomePage.title', 'Home')}</h1>
      <Button
        onClick={() => {
          dispatch({ type: 'signOut' })
          navigate(home())
        }}
      >
        {t('AppHomePage.signOut', 'Sign Out')}
      </Button>
    </AppPageLayout>
  )
}
