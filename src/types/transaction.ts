import { Paginated } from './backend';

export interface GetTransaction {
  id: string,
  account_id: string,
  description: string,
  amount: number,
  type: 'INCOME' | 'EXPENSE',
  created_at: string
}

export interface CreateTransaction {
  amount: number,
	description: string,
	type: 'INCOME' | 'EXPENSE'
}

export type GetTransactionResponse = Paginated<GetTransaction>