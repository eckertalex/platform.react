import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, Link, NavLink } from 'react-router-dom'

import { appHome } from 'routes/routes'
import LogoPlatformReact from 'assets/svg/logo-platform-react'
import classNames from 'classnames'
import { menuConfig, menuFooterConfig } from 'layouts/app-page-layout/menu'
/* -------------------------------------------------------------------------- */

export default function Sidebar() {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  return (
    <nav className="z-20 w-64 overflow-y-auto bg-white flex-shrink-0 h-full py-4">
      <div className="divide-y divide-gray-300">
        <div className="flex items-center justify-center mb-6 mt-2 h-6">
          <Link to={appHome()}>
            <LogoPlatformReact />
          </Link>
        </div>
        <div>
          {menuConfig(t).map((e) => (
            <NavLink
              key={e.path}
              className={classNames(
                'w-64 flex items-center mt-5 py-2 px-8 text-primary-500 border-r-4 border-white hover:bg-gray-200 hover:text-primary-500 hover:border-primary-500',
                {
                  'text-primary-500 border-primary-500': e.path === pathname,
                }
              )}
              to={e.path}
            >
              {e.icon}
              <span className="mx-4 font-medium">{e.label}</span>
            </NavLink>
          ))}
        </div>
        <div className="absolute bottom-0 my-10 w-64">
          {menuFooterConfig(t).map((e) => (
            <NavLink
              key={e.path}
              className={classNames(
                'w-64 flex items-center mt-5 py-2 px-8 text-primary-500 border-r-4 border-white hover:bg-gray-200 hover:text-primary-500 hover:border-primary-500',
                {
                  'text-primary-500 border-primary-500': e.path === pathname,
                }
              )}
              to={e.path}
            >
              {e.icon}
              <span className="mx-4 font-medium">{e.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
