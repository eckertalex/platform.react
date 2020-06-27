import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const NotFoundPage = lazyLoad(
  () => import('pages/not-found-page/not-found-page'),
  (module) => module.default
)

export default NotFoundPage
