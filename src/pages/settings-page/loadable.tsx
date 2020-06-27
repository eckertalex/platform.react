import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const SettingsPage = lazyLoad(
  () => import('pages/settings-page/settings-page'),
  (module) => module.default
)

export default SettingsPage
