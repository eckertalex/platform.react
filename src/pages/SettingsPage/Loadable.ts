import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const SettingsPage = lazyLoad(
  () => import('pages/SettingsPage/SettingsPage'),
  (module) => module.default
)

export default SettingsPage
