import api from './backend'

import { Analytics } from 'types/analytics'

export async function getAnalytics () {
  return await api.get<Analytics>('/analytics')
}