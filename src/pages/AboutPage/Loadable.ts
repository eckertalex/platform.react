import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const AboutPage = lazyLoad(
  () => import('pages/AboutPage/AboutPage'),
  (module) => module.default
)

export default AboutPage
