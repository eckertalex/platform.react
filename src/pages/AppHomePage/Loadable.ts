import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const AppHomePage = lazyLoad(
  () => import('pages/AppHomePage/AppHomePage'),
  (module) => module.default
)

export default AppHomePage
