import React from 'react'
import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>{helmetTitle}</title>
        <meta name="description" content={helmetDescription} />
      </Helmet>
      <main className="container mx-auto">{children}</main>
    </>
  )
}
