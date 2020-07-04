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
import AuthPageLayout from 'layouts/auth-page-layout/auth-page-layout'
import { signIn, forgotPassword, signUp, home, about, appHome, settings } from 'routes/routes'
import AppPageLayout from 'layouts/app-page-layout/app-page-layout'
import LandingPageLayout from 'layouts/landing-page-layout/landing-page-layout'
/* -------------------------------------------------------------------------- */

export default function Router() {
  const { state } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route path={home()} element={<LandingPage />} />
          <Route path={about()} element={<AboutPage />} />
        </Route>
        {state.isAuthenticated ? (
          <Route path="/" element={<AppPageLayout />}>
            <Route path={appHome()} element={<AppHomePage />} />
            <Route path={settings()} element={<SettingsPage />} />
          </Route>
        ) : (
          <Route path="/" element={<AuthPageLayout />}>
            <Route path={signIn()} element={<SignInPage />} />
            <Route path={forgotPassword()} element={<ForgotPasswordPage />} />
            <Route path={signUp()} element={<SignUpPage />} />
          </Route>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
