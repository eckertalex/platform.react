import React from 'react'

import Navbar from 'layouts/landing-page-layout/navbar'
import LandingFooter from 'layouts/landing-page-layout/landing-footer'
import HeroText from 'layouts/landing-page-layout/hero-text'
import IllustrationDashboard from 'layouts/landing-page-layout/illustration-dashboard'
import { Outlet } from 'react-router-dom'
/* -------------------------------------------------------------------------- */

export default function LandingPageLayout() {
  return (
    <>
      <div className="bg-white container mx-auto pb-8">
        <Navbar />
        <div className="lg:flex">
          <HeroText />
          <IllustrationDashboard />
        </div>
      </div>
      <main className="bg-gray-100">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
      <LandingFooter />
    </>
  )
}
