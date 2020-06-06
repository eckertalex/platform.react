import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import MobileMenu from 'layouts/LandingPageLayout/MobileMenu/MobileMenu'
import DesktopMenu from 'layouts/LandingPageLayout/DesktopMenu/DesktopMenu'
import HeroText from 'layouts/LandingPageLayout/HeroText/HeroText'
import HeroImage from 'layouts/LandingPageLayout/HeroImage/HeroImage'
import LandingFooter from 'layouts/LandingPageLayout/LandingFooter/LandingFooter'
import SlantedBar from 'assets/svg/SlantedBar'
/* -------------------------------------------------------------------------- */

type LandingPageLayoutProps = {
  children: React.ReactNode
  helmetTitle: string
  helmetDescription: string
}

export default function LandingPageLayout(props: LandingPageLayoutProps) {
  const [mobileMenuOpen, toggleMobileMenu] = useState(false)
  const { helmetTitle, helmetDescription, children } = props

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name="description" content={helmetDescription} />
      </Helmet>
      <div className="relative bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
            <SlantedBar />
            <DesktopMenu
              onOpen={() => {
                toggleMobileMenu(true)
              }}
            />
            <MobileMenu
              open={mobileMenuOpen}
              onClose={() => {
                toggleMobileMenu(false)
              }}
            />
            <HeroText />
          </div>
        </div>
        <HeroImage />
      </div>
      <main className="bg-gray-100">
        <div className="container mx-auto">{children}</div>
      </main>
      <LandingFooter />
    </>
  )
}
