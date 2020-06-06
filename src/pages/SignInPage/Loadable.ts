import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const SignInPage = lazyLoad(
  () => import('pages/SignInPage/SignInPage'),
  (module) => module.default
)

export default SignInPage
