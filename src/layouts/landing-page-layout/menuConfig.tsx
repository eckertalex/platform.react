import { about } from 'routes/routes'
/* -------------------------------------------------------------------------- */

type MenuEntry = {
  id: string
  label: string
  path: string | null
}

export default (t: (s: string, def?: string) => string): MenuEntry[] => [
  {
    id: 'about',
    label: t('menuConfig.about', 'About'),
    path: about(),
  },
  {
    id: 'news',
    label: t('menuConfig.news', 'News'),
    path: null,
  },
  {
    id: 'contact',
    label: t('menuConfig.contact', 'Contact'),
    path: null,
  },
]
