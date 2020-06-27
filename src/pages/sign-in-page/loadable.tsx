import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const SignInPage = lazyLoad(
  () => import('pages/sign-in-page/sign-in-page'),
  (module) => module.default
)

export default SignInPage
