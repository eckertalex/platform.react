import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu as MenuIcon } from 'react-feather'

import LogoPlatformReact from 'assets/svg/logo-platform-react'
import MobileMenu from 'layouts/landing-page-layout/mobile-menu'
import DesktopMenu from 'layouts/landing-page-layout/desktop-menu'
import { home } from 'routes/routes'
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const [mobileMenuOpen, toggleMobileMenu] = useState(false)

  return (
    <>
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
                  onClick={() => {
                    toggleMobileMenu(true)
                  }}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <MenuIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <DesktopMenu />
          </div>
        </nav>
      </div>
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => {
          toggleMobileMenu(false)
        }}
      />
    </>
  )
}
