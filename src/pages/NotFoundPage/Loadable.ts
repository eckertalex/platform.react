import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const NotFoundPage = lazyLoad(
  () => import('pages/NotFoundPage/NotFoundPage'),
  (module) => module.default
)

export default NotFoundPage
