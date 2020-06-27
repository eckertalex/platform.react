import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from 'context/auth-context'
import NotFoundPage from 'pages/not-found-page/loadable'
import LandingPage from 'pages/landing-page/loadable'
import AboutPage from 'pages/about-page/loadable'
import SignInPage from 'pages/sign-in-page/loadable'
import SignUpPage from 'pages/sign-up-page/loadable'
import ForgotPasswordPage from 'pages/forgot-password-page/loadable'
import AppHomePage from 'pages/app-home-page/loadable'
import SettingsPage from 'pages/settings-page/loadable'
import ROUTES from 'routes/routes'
/* -------------------------------------------------------------------------- */

export default function Router() {
  const { state } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME.HOME} element={<LandingPage />} />
        <Route path={ROUTES.HOME.ABOUT} element={<AboutPage />} />
        {state.isAuthenticated ? (
          <>
            <Route path={ROUTES.APP.APP_HOME} element={<AppHomePage />} />
            <Route path={ROUTES.APP.SETTINGS} element={<SettingsPage />} />
          </>
        ) : (
          <>
            <Route path={ROUTES.AUTH.SIGN_IN} element={<SignInPage />} />
            <Route path={ROUTES.AUTH.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
            <Route path={ROUTES.AUTH.SIGN_UP} element={<SignUpPage />} />
          </>
        )}
        <Route path={ROUTES.CATCH_ALL} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
