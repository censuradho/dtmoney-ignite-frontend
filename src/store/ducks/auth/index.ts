import { Reducer } from 'redux'

import { authTypes, AuthData } from './types'

export * from './actions'

const baseState = {} as AuthData

const reducerAuth: Reducer<AuthData> = (state = baseState, action) => {
  switch (action.type) {
    case authTypes.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    case authTypes.REFRASH_TOKEN:
      return {
        ...state,
        ...action.payload
      }
    case authTypes.SIGN_OUT:
      return {
        ...baseState
      }
    default:
      return state
    }
}

export default reducerAuth