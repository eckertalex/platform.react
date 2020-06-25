import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { about, signIn } from 'routes/routes'
/* -------------------------------------------------------------------------- */

export default function DesktopMenu() {
  const { t } = useTranslation()

  return (
    <div className="hidden md:block md:ml-10 md:pr-4">
      <Link
        to={about()}
        className="ml-8 font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out"
      >
        {t('Topbar.about', 'About')}
      </Link>
      <button
        type="button"
        className="ml-8 font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out"
      >
        {t('Topbar.news', 'News')}
      </button>
      <button
        type="button"
        className="ml-8 font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out"
      >
        {t('Topbar.contact', 'Contact')}
      </button>
      <Link
        to={signIn()}
        className="ml-8 font-medium text-primary-600 hover:text-primary-800 focus:outline-none focus:text-primary-800 transition duration-150 ease-in-out"
      >
        {t('Topbar.signIn', 'Sign In')}
      </Link>
    </div>
  )
}
