import React from 'react'

import FullScreenSpinner from 'fragments/loading/full-screen-spinner'
/* -------------------------------------------------------------------------- */

interface Opts {
  fallback: React.ReactNode
}

type Unpromisify<T> = T extends Promise<infer P> ? P : never

export function lazyLoad<T extends Promise<any>, U extends React.ComponentType<any>>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: <FullScreenSpinner /> }
) {
  let lazyFactory: () => Promise<{ default: U }> = importFunc

  if (selectorFunc) {
    lazyFactory = () => importFunc().then((module) => ({ default: selectorFunc(module) }))
  }

  const LazyComponent = React.lazy(lazyFactory)

  return (props: React.ComponentProps<U>): JSX.Element => (
    <React.Suspense fallback={opts.fallback!}>
      <LazyComponent {...props} />
    </React.Suspense>
  )
}
