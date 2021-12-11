import { CreatePerfilRequest, GetPerfilResponse } from 'types/perfil'
import api from './backend'

export async function postPerfil (payload: CreatePerfilRequest) {
  return await api.post('/perfil', payload)
}

export async function deletePerfil (user_id: string) {
  return await api.delete(`/perfil/user/${user_id}`)
}

export async function getPerfil (user_id: string) {
  return await api.get<GetPerfilResponse>(`/perfil/${user_id}`)
}
