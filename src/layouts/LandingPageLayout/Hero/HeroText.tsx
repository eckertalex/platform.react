import React from 'react'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'

import Button from 'fragments/Button/Button'
import { signIn } from 'routes/routes'
/* -------------------------------------------------------------------------- */

export default function HeroText() {
  const { t } = useTranslation()
  return (
    <section className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="text-left">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          <Trans i18nKey="HeroText.headline">
            Data to enrich your
            <br className="xl:hidden" />
            <span className="text-primary-500"> online business</span>
          </Trans>
        </h2>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          {t(
            'HeroText.text',
            'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
          )}
        </p>
        <div className="mt-8 flex lg:flex-shrink-0 lg:mt-4">
          <Link to={signIn()}>
            <Button lg>{t('HeroText.getStarted', 'Get started')}</Button>
          </Link>
          <div className="ml-3">
            <Link to={signIn()}>
              <Button lg outlined>
                {t('HeroText.liveDemo', 'Live demo')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
