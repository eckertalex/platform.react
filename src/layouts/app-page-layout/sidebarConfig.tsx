import React from 'react'
import { Grid as GridIcon, Settings as SettingsIcon } from 'react-feather'

import { appHome, settings } from 'routes/routes'
/* -------------------------------------------------------------------------- */

export const sidebarConfig = (t: (s: String, def?: string) => string) => [
  {
    label: t('sidebarConfig.overview', 'Overview'),
    icon: <GridIcon />,
    path: appHome(),
  },
]

export const sidebarFooterConfig = (t: (s: String, def?: string) => string) => [
  {
    label: t('sidebarConfig.settings', 'Settings'),
    icon: <SettingsIcon />,
    path: settings(),
  },
]
