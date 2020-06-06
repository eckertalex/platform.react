/* eslint-disable no-console */
import chalk from 'chalk'
import rimraf from 'rimraf'
import shell from 'shelljs'
import path from 'path'
import nodePlop, { PlopGenerator as PG } from 'node-plop'

import { ComponentPromptNames } from '../generators/component'
import { PagePromptNames } from '../generators/page'
/* -------------------------------------------------------------------------- */

interface PlopGenerator extends PG {
  runActions: <T extends string | number>(props: { [P in T]: any }) => Promise<{ changes: []; failures: [] }>
}

process.chdir(path.join(__dirname, '../generators'))

const plop = nodePlop('./plopfile.ts')
const componentGen = plop.getGenerator('component') as PlopGenerator
const pageGen = plop.getGenerator('page') as PlopGenerator

const NAMESPACE = 'RbGenerated'

const componentsPath = path.join(process.cwd(), '../../src/components')
const pagesPath = path.join(process.cwd(), '../../src/pages')

function runLinting() {
  return new Promise((resolve, reject) => {
    shell.exec(
      `npm run lint`,
      {
        silent: false, // so that we can see the errors in the console
      },
      (code) => (code ? reject(new Error(`Linting failed!`)) : resolve())
    )
  })
}

function checkTypescript() {
  return new Promise((resolve, reject) => {
    shell.exec(
      `npm run check-types`,
      {
        silent: false, // so that we can see the errors in the console
      },
      (code) => (code ? reject(new Error(`Typescript failed!`)) : resolve())
    )
  })
}

function removeComponent(name: string) {
  return rimraf.sync(path.join(componentsPath, name))
}

function removePage(name: string) {
  return rimraf.sync(path.join(pagesPath, name))
}

async function handleResult({ changes, failures }: { changes: []; failures: [] }) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(failures) && failures.length > 0) {
      reject(new Error(JSON.stringify(failures, null, 2)))
    }
    resolve(changes)
  })
}
function feedbackToUser(info) {
  return (result?: any) => {
    console.info(chalk.blue(info))
    return result
  }
}

function reportSuccess(message: string) {
  return (result) => {
    console.log(chalk.green(` ✓ ${message}`))
    return result
  }
}

function reportErrors(reason: Error, shouldExist = true) {
  console.error(chalk.red(` ✘ ${reason}`))
  if (shouldExist) {
    process.exit(1)
  }
}

async function generateComponent() {
  const componentNameBase = `${NAMESPACE}Component`

  const allCombinations = permuatateBooleans(3)
  const promises: Promise<string>[] = []
  for (let i = 0; i < allCombinations.length; i++) {
    const values = allCombinations[i]
    const name = `${componentNameBase}${i}`
    const p = componentGen
      .runActions<ComponentPromptNames>({
        ComponentName: name,
        wantMemo: values[0],
        wantTranslations: values[1],
        wantTests: values[2],
      })
      .then(handleResult)
      .then(feedbackToUser(`Generated '${name}'`))
      .then((_) => name)
    promises.push(p)
  }
  const components = await Promise.all(promises)

  // return a cleanup function
  const cleanup = () => {
    for (const component of components) {
      removeComponent(component)
      feedbackToUser(`Cleaned '${component}'`)()
    }
  }
  return [cleanup]
}

async function generatePage() {
  const pageNameBase = `${NAMESPACE}Page`

  const allCombinations = permuatateBooleans(5)
  const pageNames: string[] = []
  for (let i = 0; i < allCombinations.length; i++) {
    const values = allCombinations[i]
    const name = `${pageNameBase}${i}`
    await pageGen
      .runActions<PagePromptNames>({
        ComponentName: name,
        wantMemo: true,
        wantHeaders: values[0],
        wantLoadable: true,
        wantTranslations: values[1],
        wantTests: values[2],
      })
      .then(handleResult)
      .then(feedbackToUser(`Generated '${name}'`))
      .then((_) => name)
    pageNames.push(name)
  }

  // return a cleanup function
  const cleanup = () => {
    for (const page of pageNames) {
      removePage(page)
      feedbackToUser(`Cleaned '${page}'`)()
    }
  }
  return [cleanup]
}

/**
 * Run
 */
;(async function () {
  const componentCleanup = await generateComponent().catch((reason) => {
    reportErrors(reason)
    return []
  })
  const pageCleanup = await generatePage().catch((reason) => {
    reportErrors(reason)
    return []
  })
  // Run lint when all the components are generated to see if they have any linting erros
  const lintingResult = await runLinting()
    .then(reportSuccess(`Linting test passed`))
    .catch((reason) => {
      reportErrors(reason, false)
      return false
    })

  const tsResult = await checkTypescript()
    .then(reportSuccess(`Typescript test passed`))
    .catch((reason) => {
      reportErrors(reason, false)
      return false
    })

  const cleanups = [...componentCleanup, ...pageCleanup]
  // Everything is done, so run the cleanups synchronously
  for (const cleanup of cleanups) {
    if (typeof cleanup === 'function') {
      cleanup()
    }
  }

  if ((lintingResult && tsResult) === false) {
    process.exit(1)
  }
})()

function permuatateBooleans(length: number) {
  const array: boolean[][] = []
  for (let i = 0; i < 1 << length; i++) {
    const items: boolean[] = []
    for (let j = length - 1; j > 0; j--) {
      items.push(!!(i & (1 << j)))
    }
    array.push([...items, !!(i & 1)])
  }
  return array
}
