import { NodePlopAPI } from 'plop'
import { componentGenerator } from './component'
import { pageGenerator } from './page'
import shell from 'shelljs'
/* -------------------------------------------------------------------------- */

interface CustomActionData {
  path: string
  file?: string
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('page', pageGenerator)

  plop.setActionType('format', (_a, config) => {
    const data = config.data as CustomActionData
    shell.exec(`npm run format -- "${data.path}"`, { silent: true })
    return ''
  })
}
