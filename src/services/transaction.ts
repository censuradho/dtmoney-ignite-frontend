
import { objToQuery } from 'utils/query'
import api from './backend'

import { BaseQuery } from 'types/backend'
import { CreateTransaction, GetTransactionResponse } from 'types/transaction'

export async function postTransaction (payload: CreateTransaction) {

  return await api.post('/transaction', payload)
}

export async function getTransaction (query?: BaseQuery) {
  return await api.get<GetTransactionResponse>(`/transaction/account${query ? `?${objToQuery(query)}` : ''}`)
}

export async function deleteTransaction (transactions_id: string) {
  return await api.delete(`/transaction/${transactions_id}`)
  
}