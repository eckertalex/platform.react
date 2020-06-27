import { lazyLoad } from 'utils/loadable'
/* -------------------------------------------------------------------------- */

const AboutPage = lazyLoad(
  () => import('pages/about-page/about-page'),
  (module) => module.default
)

export default AboutPage
