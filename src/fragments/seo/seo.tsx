import React from 'react'
import { Helmet } from 'react-helmet-async'
/* -------------------------------------------------------------------------- */

type SEOProps = {
  helmetTitle: string
  helmetDescription: string
}

export default function SEO(props: SEOProps) {
  const { helmetTitle, helmetDescription } = props

  return (
    <Helmet>
      <title>{helmetTitle}</title>
      <meta name="description" content={helmetDescription} />
    </Helmet>
  )
}
