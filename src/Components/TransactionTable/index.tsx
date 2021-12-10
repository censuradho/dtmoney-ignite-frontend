import { IconButton, Paginate } from 'Components'
import { useTransactionContext } from 'Provider/TransactionProvider'
import { deleteTransaction } from 'services/transaction'

import { Container, PaginateContainer } from './styles'


export function TransactionTable() {
   const { transactions, meta, isLoading, setQueries, queries, handleLoadTransaction }  = useTransactionContext()

   const handleDelete = async (id: string) => {
    try {
        await deleteTransaction(id)
        await handleLoadTransaction(queries)
    } catch (err) {}
   }
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                  {transactions.map(transaction => {
                      return (
                        <tr key={transaction.id}>
                            <td>{transaction.description}</td>
                            <td className={transaction.amount > 0 ? 'income' : 'expense'}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>
                                {transaction.created_at && new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.created_at)
                                )} 
                            </td>
                            <td>
                                <IconButton 
                                    onClick={() => handleDelete(transaction.id)}
                                    size={2} 
                                    icon={{
                                        name: 'remove'
                                    }}/>
                            </td>
                        </tr>
                      )
                  })}
                </tbody>
            </table>
            {transactions.length > 0 && (
                <PaginateContainer>
                    <Paginate 
                        total={meta._total_pages} 
                        onChange={_page => setQueries(prevState => ({ ...prevState, _page }))} 
                    />
                </PaginateContainer>
            )}
        </Container>
    )
}