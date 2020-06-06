export const CATCH_ALL = '*'

export const HOME = {
  HOME: '/',
  ABOUT: 'about',
}

export const APP = {
  APP_HOME: 'home',
  SETTINGS: 'settings',
}

export const AUTH = {
  SIGN_IN: 'signin',
  FORGOT_PASSWORD: 'forgotPassword',
  SIGN_UP: 'signup',
}

export default { HOME, AUTH, APP, CATCH_ALL }

// ----- routes functions -----

export const home = () => `/${HOME.HOME}`

export const about = () => `/${HOME.ABOUT}`

export const appHome = () => `/${APP.APP_HOME}`

export const settings = () => `/${APP.SETTINGS}`

export const signIn = () => `/${AUTH.SIGN_IN}`

export const forgotPassword = () => `/${AUTH.FORGOT_PASSWORD}`

export const signUp = () => `/${AUTH.SIGN_UP}`
