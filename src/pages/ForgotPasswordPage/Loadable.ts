import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const ForgotPasswordPage = lazyLoad(
  () => import('pages/ForgotPasswordPage/ForgotPasswordPage'),
  (module) => module.default
)

export default ForgotPasswordPage
