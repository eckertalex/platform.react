import React from 'react'

import HeroText from 'layouts/LandingPageLayout/Hero/HeroText'
import IllustrationDashboard from 'layouts/LandingPageLayout/Hero/IllustrationDashboard'
/* -------------------------------------------------------------------------- */

export default function Hero() {
  return (
    <div className="lg:flex">
      <HeroText />
      <IllustrationDashboard />
    </div>
  )
}
