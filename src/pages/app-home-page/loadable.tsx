import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const AppHomePage = lazyLoad(
  () => import('pages/app-home-page/app-home-page'),
  (module) => module.default
)

export default AppHomePage
