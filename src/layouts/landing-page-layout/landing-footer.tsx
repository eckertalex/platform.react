import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'

import { home, about } from 'routes/routes'
import LogoPlatformReact from 'assets/svg/logo-platform-react'
import USFlag from 'assets/svg/flags/us-flag'
import GermanFlag from 'assets/svg/flags/german-flag'
import locales from 'i18n/locales'
/* -------------------------------------------------------------------------- */

export default function LandingFooter() {
  const { t, i18n } = useTranslation()

  return (
    <footer className="flex justify-center px-4 text-primary-100 bg-primary-800">
      <div className="container py-6">
        <h1 className="text-center text-lg font-bold lg:text-2xl">
          <Trans i18nKey="LandingFooter.cta">
            Join 31,000+ other and never miss <br /> out on new tips, tutorials, and more.
          </Trans>
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                className="m-1 p-2 appearance-none text-primary-700 text-sm focus:outline-none"
                placeholder={t('LandingFooter.placeholder', 'Enter your email')}
              />
              <button className="w-full m-1 p-2 text-sm bg-primary-800 rounded-lg font-semibold uppercase lg:w-auto hover:bg-primary-700">
                {(t('LandingFooter.subscribe'), 'Subscribe')}
              </button>
            </div>
          </div>
        </div>

        <hr className="h-px mt-6 bg-primary-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <Link to={home()} className="text-xl font-bold">
              <LogoPlatformReact color="#e6fffa" />
            </Link>
          </div>
          <div className="flex mt-4 md:m-0">
            {Object.keys(locales).map((lang) => (
              <div className="flex flex-row px-4">
                {lang === 'en' ? <USFlag height={21} /> : <GermanFlag height={21} />}
                <button
                  onClick={() => {
                    i18n.changeLanguage(lang)
                  }}
                  className="ml-2 text-sm hover:underline"
                >
                  <p>{locales[lang]}</p>
                </button>
              </div>
            ))}
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <Link to={about()} className="px-4 text-sm hover:underline">
                {t('LandingFooter.about', 'About')}
              </Link>
              {/* Make it look like a link for now */}
              <button type="button" className="px-4 text-sm hover:underline">
                {t('LandingFooter.news', 'News')}
              </button>
              {/* Make it look like a link for now */}
              <button type="button" className="px-4 text-sm hover:underline">
                {t('LandingFooter.contact', 'Contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
