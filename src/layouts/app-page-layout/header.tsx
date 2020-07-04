import React from 'react'
import { useTranslation } from 'react-i18next'

import TextField from 'fragments/text-field/text-field'
/* -------------------------------------------------------------------------- */

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="z-10">
      <div className="container max-auto h-full flex items-end justify-end">
        <div className="w-full max-w-md p-4">
          <TextField id="search" placeholder={t('Header.search', 'Search...')} />
        </div>
      </div>
    </header>
  )
}
