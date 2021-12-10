import { SignInResponse, RefrashTokenResponse } from 'types/auth'

import { authTypes } from './types'

export function actionRefrashToken (payload: RefrashTokenResponse) {
  return {
    type: authTypes.REFRASH_TOKEN,
    payload
  }
}

export function actionSignOut () {
  return {
    type: authTypes.SIGN_OUT,
  }
}

export function actionSignIn (payload: SignInResponse) {
  return {
    type: authTypes.SIGN_IN,
    payload
  }
}