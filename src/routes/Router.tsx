import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from 'context/AuthContext'
import NotFoundPage from 'pages/NotFoundPage/Loadable'
import LandingPage from 'pages/LandingPage/Loadable'
import AboutPage from 'pages/AboutPage/Loadable'
import SignInPage from 'pages/SignInPage/Loadable'
import SignUpPage from 'pages/SignUpPage/Loadable'
import ForgotPasswordPage from 'pages/ForgotPasswordPage/Loadable'
import AppHomePage from 'pages/AppHomePage/Loadable'
import SettingsPage from 'pages/SettingsPage/Loadable'
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
