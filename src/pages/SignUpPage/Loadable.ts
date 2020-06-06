import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const SignUpPage = lazyLoad(
  () => import('pages/SignUpPage/SignUpPage'),
  (module) => module.default
)

export default SignUpPage
