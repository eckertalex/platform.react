import React from 'react'
import { Helmet } from 'react-helmet-async'

import Navbar from 'layouts/LandingPageLayout/Navbar/Navbar'
import Hero from 'layouts/LandingPageLayout/Hero/Hero'
import LandingFooter from 'layouts/LandingPageLayout/LandingFooter/LandingFooter'
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
        <Hero />
      </div>
      <main className="bg-gray-100">
        <div className="container mx-auto">{children}</div>
      </main>
      <LandingFooter />
    </>
  )
}
