import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as serviceWorker from 'serviceWorker'

// Import root app
import App from 'app/app'

// Initialize languages
import 'i18n/i18n'

import 'styles/tailwind.generated.css'
/* -------------------------------------------------------------------------- */

type IndexProps = {
  element: React.ReactNode
}

function Index(props: IndexProps) {
  return (
    <React.StrictMode>
      <React.Suspense fallback="Loading...">{props.element}</React.Suspense>
    </React.StrictMode>
  )
}

/* -------------------------------------------------------------------------- */

const MOUNT_NODE = document.getElementById('root') as HTMLElement

ReactDOM.render(<Index element={<App />} />, MOUNT_NODE)

if (module.hot) {
  // Hot reloadable app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app/app'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    const App = require('./app/app').App

    ReactDOM.render(<Index element={<App />} />, MOUNT_NODE)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
