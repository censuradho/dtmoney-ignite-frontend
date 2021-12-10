import { useTransactions } from 'hooks/useTransactions'
import { createContext, ReactNode, useContext } from 'react'

type TransactionContextProps = ReturnType<typeof useTransactions>

const TransactionContext = createContext({} as TransactionContextProps)

interface TransactionProvideProps {
  children: ReactNode
} 

export function TransactionProvider ({ children }: TransactionProvideProps) { 
  const { 
    transactions, 
    handleLoadTransaction, 
    isLoading, 
    meta, 
    setQueries, 
    queries, 
    cleanQueries,
    analytics
  } = useTransactions({
    loadOnMount: true
  })

  return (
    <TransactionContext.Provider value={{
      transactions,
      handleLoadTransaction, 
      isLoading, 
      meta,
      queries,
      setQueries,
      cleanQueries,
      analytics
    }}>
      {children}
    </TransactionContext.Provider>
  )
}


export function useTransactionContext () {
  return useContext(TransactionContext)
}