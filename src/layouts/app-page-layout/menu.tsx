import React from 'react'
import { Grid as GridIcon, Settings as SettingsIcon } from 'react-feather'

import { appHome, settings } from 'routes/routes'
/* -------------------------------------------------------------------------- */

export const menuConfig = (t: (s: String, def?: string) => string) => [
  {
    label: t('menu.overview', 'Overview'),
    icon: <GridIcon />,
    path: appHome(),
  },
]

export const menuFooterConfig = (t: (s: String, def?: string) => string) => [
  {
    label: t('menu.settings', 'Settings'),
    icon: <SettingsIcon />,
    path: settings(),
  },
]
