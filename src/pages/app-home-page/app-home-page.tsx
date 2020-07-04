import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { useAuth } from 'context/auth-context'
import Button from 'fragments/button/button'
import { home } from 'routes/routes'
import SEO from 'fragments/seo/seo'
/* -------------------------------------------------------------------------- */

export default function AppHomePage() {
  const { t } = useTranslation()
  const { dispatch } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      <SEO
        helmetTitle={t('AppHomePage.title', 'Home')}
        helmetDescription={t('AppHomePage.description', 'Home Page of platform.react')}
      />
      <h1>{t('AppHomePage.title', 'Home')}</h1>
      <Button
        onClick={() => {
          dispatch({ type: 'signOut' })
          navigate(home())
        }}
      >
        {t('AppHomePage.signOut', 'Sign Out')}
      </Button>
    </>
  )
}
