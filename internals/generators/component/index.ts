import { Actions, PlopGeneratorConfig } from 'node-plop'
import path from 'path'

import { componentExists } from '../utils'
/* -------------------------------------------------------------------------- */

export enum ComponentPromptNames {
  'ComponentName' = 'ComponentName',
  'wantMemo' = 'wantMemo',
  'wantTranslations' = 'wantTranslations',
  'wantTests' = 'wantTests',
}
const componentsPath = path.join(__dirname, '../../../src/components')

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add a new component',
  prompts: [
    {
      type: 'input',
      name: ComponentPromptNames.ComponentName,
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A component with this name already exists' : true
        }

        return 'The name is required'
      },
    },
    {
      type: 'confirm',
      name: ComponentPromptNames.wantMemo,
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: ComponentPromptNames.wantTranslations,
      default: false,
      message: 'Do you want i18n translations (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: ComponentPromptNames.wantTests,
      default: false,
      message: 'Do you want to have tests?',
    },
  ],
  actions: (data: { [P in ComponentPromptNames]: string }) => {
    const pagePath = `${componentsPath}/{{properCase ${ComponentPromptNames.ComponentName}}}`

    const actions: Actions = [
      {
        type: 'add',
        path: `${pagePath}/${data.ComponentName}.tsx`,
        templateFile: './component/component.tsx.hbs',
        abortOnFail: true,
      },
    ]

    if (data.wantTests) {
      actions.push({
        type: 'add',
        path: `${pagePath}/${data.ComponentName}.test.tsx`,
        templateFile: './component/component.test.tsx.hbs',
        abortOnFail: true,
      })
    }

    actions.push({
      type: 'format',
      data: { path: `${componentsPath}/${data.ComponentName}/**` },
    })

    return actions
  },
}
