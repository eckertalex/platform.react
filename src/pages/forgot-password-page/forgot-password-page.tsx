import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import AuthPageLayout from 'layouts/auth-page-layout/auth-page-layout'
import TextField from 'fragments/text-field/text-field'
import Button from 'fragments/button/button'
import { signIn } from 'routes/routes'
/* -------------------------------------------------------------------------- */

export default function ForgotPasswordPage() {
  const { t } = useTranslation()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <AuthPageLayout
      helmetTitle={t('ForgotPasswordPage.helmetTitle', 'Forgot password page')}
      helmetDescription={t('ForgotPasswordPage.helmetDescription', 'Forgot password page for platform.react')}
    >
      <p className="text-sm text-gray-500 mb-4 text-center">
        {t('ForgotPasswordPage.enterEmailToResetPassword', 'Please enter your email to reset your password')}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextField
            id="email"
            label={t('ForgotPasswordPage.email', 'Email')}
            placeholder={t('ForgotPasswordPage.emailPlaceholder', 'xzy@google.com')}
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="w-10/12">
            {t('ForgotPasswordPage.requestEmail', 'Request Email')}
          </Button>
        </div>
        <div className="flex justify-center mt-2">
          <Link to={signIn()} className="text-primary-500 text-sm ml-1 hover:underline">
            {t('ForgotPasswordPage.backToSignIn', 'Back to Sign In')}
          </Link>
        </div>
      </form>
    </AuthPageLayout>
  )
}
