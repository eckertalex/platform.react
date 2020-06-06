import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const LandingPage = lazyLoad(
  () => import('pages/LandingPage/LandingPage'),
  (module) => module.default
)

export default LandingPage
