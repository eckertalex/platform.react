import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'

import TextField from 'fragments/text-field/text-field'
import Checkbox from 'fragments/checkbox/checkbox'
import Button from 'fragments/button/button'
import { useAuth } from 'context/auth-context'
import { forgotPassword, appHome, signUp } from 'routes/routes'
import SEO from 'fragments/seo/seo'
/* -------------------------------------------------------------------------- */

export default function SignInPage() {
  const { t } = useTranslation()
  const { dispatch } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch({ type: 'signIn' })
    navigate(appHome())
  }

  return (
    <>
      <SEO
        helmetTitle={t('SignInPage.helmetTitle', 'Sign In')}
        helmetDescription={t('SignInPage.helmetDescription', 'Sign in page of platform.react')}
      />
      <p className="text-xl text-gray-600 text-center">{t('AuthPageLayout.welcomeBack', 'Welcome back!')}</p>
      <p className="text-sm mb-4 text-gray-500 text-center">
        {t('AuthPageLayout.enterEmailAndPassword', 'Please enter your email and password to continue')}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextField
            id="email"
            label={t('SignInPage.email', 'Email')}
            placeholder={t('SignInPage.emailPlaceholder', 'xzy@google.com')}
          />
        </div>
        <div className="mb-6">
          <div className="flex justify-between">
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <Link to={forgotPassword()} className="text-xs text-primary-500 hover:underline">
              Forget Password?
            </Link>
          </div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600"
            id="password"
            type="password"
            placeholder="************"
          />
          <p className="text-red-500 text-xs italic">
            {t('SignInPage.pleaseChoosePassword', 'Please choose a password.')}
          </p>
          <div className="mt-2">
            <Checkbox label={t('SignInPage.rememberPassword', 'Remember Password')} colorClass="text-primary-500" />
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="w-10/12">
            {t('SignInPage.signIn', 'Sign In')}
          </Button>
        </div>
        <div className="flex justify-center mt-2">
          <Trans i18nKey="SignInPage.createAccount">
            <p className="text-gray-600 text-sm">Don't have an account?</p>
            <Link to={signUp()} className="text-primary-500 text-sm ml-1 hover:underline">
              Create Account
            </Link>
          </Trans>
        </div>
      </form>
    </>
  )
}
