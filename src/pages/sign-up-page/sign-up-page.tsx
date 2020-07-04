import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'

import TextField from 'fragments/text-field/text-field'
import { signIn } from 'routes/routes'
import SEO from 'fragments/seo/seo'
/* -------------------------------------------------------------------------- */

export default function SignUpPage() {
  const { t } = useTranslation()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <>
      <SEO
        helmetTitle={t('SignUpPage.helmetTitle', 'Sign In')}
        helmetDescription={t('SignUpPage.helmetDescription', 'Sign in page of platform.react')}
      />
      <p className="text-xl text-gray-600 text-center">{t('AuthPageLayout.createAccount', 'Create an Account')}</p>
      <p className="text-sm mb-4 text-gray-500 text-center">
        {t('AuthPageLayout.createAccountToContinue', 'Create an account to continue')}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextField
            id="email"
            label={t('SignUpPage.email', 'Email')}
            placeholder={t('SignUpPage.emailPlaceholder', 'xzy@google.com')}
          />
        </div>
        <div className="mb-4">
          <TextField
            id="username"
            label={t('SignUpPage.username', 'Username')}
            placeholder={t('SignUpPage.username', 'username')}
          />
        </div>
        <div className="mb-6">
          <TextField
            id="password"
            type="password"
            label={t('SignUpPage.password', 'Password')}
            placeholder={t('SignUpPage.passwordPlaceholder', '************')}
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary w-10/12">
            {t('SignUpPage.signUp', 'Sign Up')}
          </button>
        </div>
        <div className="flex justify-center mt-2">
          <Trans i18nKey="SignUpPage.backToSignIn">
            <p className="text-gray-600 text-sm">Already have an account?</p>
            <Link to={signIn()} className="text-primary-500 text-sm ml-1 hover:underline">
              Sign In
            </Link>
          </Trans>
        </div>
      </form>
    </>
  )
}
