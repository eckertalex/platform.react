import React from 'react'

import SEO from 'fragments/seo/seo'
/* -------------------------------------------------------------------------- */

type AppPageLayoutProps = {
  children: React.ReactNode
  helmetTitle: string
  helmetDescription: string
}

export default function AppPageLayout(props: AppPageLayoutProps) {
  const { helmetTitle, helmetDescription, children } = props

  return (
    <>
      <SEO helmetTitle={helmetTitle} helmetDescription={helmetDescription} />
      <main className="container mx-auo">{children}</main>
    </>
  )
}
