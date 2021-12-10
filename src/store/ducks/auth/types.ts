import { SignInResponse } from 'types/auth'

export enum authTypes {
  'SIGN_IN' = 'SIGN_IN/auth',
  'REFRASH_TOKEN' = 'REFRASH_TOKEN/auth',
  'SIGN_OUT' = 'SIGN_OUT/auth'
}


export type AuthData = SignInResponse 