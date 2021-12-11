import { CreatePerfilRequest } from 'types/perfil'
import api from './backend'

export async function postPerfil (payload: CreatePerfilRequest) {
  return await api.post('/perfil', payload)
}