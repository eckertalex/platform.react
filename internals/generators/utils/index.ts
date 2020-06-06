import fs from 'fs'
import path from 'path'
/* -------------------------------------------------------------------------- */

export function componentExists(component: string) {
  const components = fs.readdirSync(path.join(__dirname, '../../../src/components'))
  return components.indexOf(component) >= 0
}

export function pageExists(page: string) {
  const pages = fs.readdirSync(path.join(__dirname, '../../../src/pages'))
  return pages.indexOf(page) >= 0
}
