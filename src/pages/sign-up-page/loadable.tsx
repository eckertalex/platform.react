import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const SignUpPage = lazyLoad(
  () => import('pages/sign-up-page/sign-up-page'),
  (module) => module.default
)

export default SignUpPage
