import api from './backend'

import { RefrashTokenResponse, SignInPayload, SignInResponse, SignUpPayload } from 'types/auth'

export async function signIn (payload: SignInPayload) {
  return await api.post<SignInResponse>('/auth/sign-in', payload)
}

export async function signUp (payload: SignUpPayload) {
  return await api.post<SignInResponse>('/registration', payload)
}

export async function refrashToken () {
  return await api.get<RefrashTokenResponse>('/auth/refrash-token')
}

export async function signOut () {
  return await api.get('/auth/sign-out')
}