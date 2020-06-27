import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const LandingPage = lazyLoad(
  () => import('pages/landing-page/landing-page'),
  (module) => module.default
)

export default LandingPage
