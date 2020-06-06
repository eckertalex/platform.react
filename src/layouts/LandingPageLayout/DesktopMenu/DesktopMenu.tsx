import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu as MenuIcon } from 'react-feather'

import LogoPlatformReact from 'assets/svg/LogoPlatformReact'
import { about, signIn, home } from 'routes/routes'
/* -------------------------------------------------------------------------- */

type DesktopMenuProps = {
  onOpen: () => void
}

export default function DesktopMenu(props: DesktopMenuProps) {
  const { t } = useTranslation()
  const { onOpen: handleOpen } = props

  return (
    <div className="relative pt-6">
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full px-4 md:w-auto">
            <Link to={home()}>
              <div className="h-8 w-auto sm:h-10">
                <LogoPlatformReact />
              </div>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                onClick={handleOpen}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
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
      </nav>
    </div>
  )
}
