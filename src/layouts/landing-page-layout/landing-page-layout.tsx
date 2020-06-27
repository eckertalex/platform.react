import React from 'react'
import { Helmet } from 'react-helmet-async'

import Navbar from 'layouts/landing-page-layout/navbar'
import LandingFooter from 'layouts/landing-page-layout/landing-footer'
import HeroText from 'layouts/landing-page-layout/hero-text'
import IllustrationDashboard from 'layouts/landing-page-layout/illustration-dashboard'
/* -------------------------------------------------------------------------- */

type LandingPageLayoutProps = {
  children: React.ReactNode
  helmetTitle: string
  helmetDescription: string
}

export default function LandingPageLayout(props: LandingPageLayoutProps) {
  const { helmetTitle, helmetDescription, children } = props

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name="description" content={helmetDescription} />
      </Helmet>
      <div className="bg-white container mx-auto pb-8">
        <Navbar />
        <div className="lg:flex">
          <HeroText />
          <IllustrationDashboard />
        </div>
      </div>
      <main className="bg-gray-100">
        <div className="container mx-auto">{children}</div>
      </main>
      <LandingFooter />
    </>
  )
}
