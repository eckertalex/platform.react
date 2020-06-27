import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const ForgotPasswordPage = lazyLoad(
  () => import('pages/forgot-password-page/forgot-password-page'),
  (module) => module.default
)

export default ForgotPasswordPage
