import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'


interface Transaction {
 id: number,
 title: string,
 amount: number,
 type: string,
 category: string,
 createdAt: string
}



export function TransactionTable() {
   const { transactions }  = useTransactions()
  

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                  {transactions.map(transaction => {
                      return (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {transaction.createdAt && new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt)
                                )} 

                            </td>
                        </tr>
                      )
                  })}
                </tbody>
            </table>
        </Container>
    )
}