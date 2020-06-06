import { Actions, PlopGeneratorConfig } from 'node-plop'
import path from 'path'

import { pageExists } from '../utils'
/* -------------------------------------------------------------------------- */

export enum PagePromptNames {
  'ComponentName' = 'ComponentName',
  'wantMemo' = 'wantMemo',
  'wantHeaders' = 'wantHeaders',
  'wantTranslations' = 'wantTranslations',
  'wantLoadable' = 'wantLoadable',
  'wantTests' = 'wantTests',
}

const pagesPath = path.join(__dirname, '../../../src/pages')

export const pageGenerator: PlopGeneratorConfig = {
  description: 'Add a new page',
  prompts: [
    {
      type: 'input',
      name: PagePromptNames.ComponentName,
      message: 'What should it be called? (Page will be appended to the name)',
      default: 'Settings',
      validate: (value) => {
        if (/.+/.test(value)) {
          return pageExists(value) ? 'A page with this name already exists' : true
        }

        return 'The name is required'
      },
    },
    {
      type: 'confirm',
      name: PagePromptNames.wantMemo,
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: PagePromptNames.wantHeaders,
      default: false,
      message: 'Do you want headers?',
    },
    {
      type: 'confirm',
      name: PagePromptNames.wantTranslations,
      default: false,
      message: 'Do you want i18n translations (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: PagePromptNames.wantLoadable,
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
    {
      type: 'confirm',
      name: PagePromptNames.wantTests,
      default: false,
      message: 'Do you want to have tests?',
    },
  ],
  actions: (data: { [P in PagePromptNames]: string }) => {
    const pagePath = `${pagesPath}/{{properCase ${PagePromptNames.ComponentName}}}Page`

    const actions: Actions = [
      {
        type: 'add',
        path: `${pagePath}/${data.ComponentName}Page.tsx`,
        templateFile: './page/page.tsx.hbs',
        abortOnFail: true,
      },
    ]

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: `${pagePath}/Loadable.ts`,
        templateFile: './page/loadable.ts.hbs',
        abortOnFail: true,
      })
    }

    if (data.wantTests) {
      actions.push({
        type: 'add',
        path: `${pagePath}/${data.ComponentName}Page.test.tsx`,
        templateFile: './page/page.test.tsx.hbs',
        abortOnFail: true,
      })
    }

    actions.push({
      type: 'format',
      data: { path: `${pagesPath}/${data.ComponentName}/**` },
    })

    return actions
  },
}
