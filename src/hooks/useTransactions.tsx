import { useEffect, useState } from 'react'
import { BaseQuery, Meta } from 'types/backend'

import { GetTransaction } from 'types/transaction'

import { getTransaction as getTransactionApi } from 'services/transaction'
import useBoolean from './useBoolean'
import { Analytics } from 'types/analytics'
import { getAnalytics } from 'services/analytics'

type Transaction = GetTransaction


interface Options {
    query?: BaseQuery,
    loadOnMount?: boolean
}

const baseMeta: Meta = {
    _next_page: 0,
    _page: 0,
    _per_page: 0,
    _previues_page: 0,
    _total_items: 0,
    _total_pages: 0
}

const baseQueries: BaseQuery = {}

const baseAnalytics: Analytics = {
    expense: 0,
    income: 0,
    total: 0
}

export function useTransactions (options?: Options) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [analytics, setAnalytics] = useState(baseAnalytics)
    const [meta, setMeta] = useState(baseMeta)
    const [isLoading, toggleIsLoading] = useBoolean(false)

    const [queries, setQueries] = useState<BaseQuery>(baseQueries)

    const getAnalyticsRequest = async () => {
        const { data } = await getAnalytics()

        setAnalytics(data)
    }


    const handleLoadTransaction = async (query?: BaseQuery) => {
        try {
            const { data } = await getTransactionApi(query)
            toggleIsLoading()

            setTransactions(data.data)
            setMeta(data.meta)
            getAnalyticsRequest()
        } catch (err) {
            console.log(err)
        } finally {
            toggleIsLoading()
        }

    }

    const cleanQueries = () => {
        setQueries(baseQueries)
    }

    useEffect(() => {
        options?.loadOnMount && handleLoadTransaction(options?.query)
    }, [])

    return {
        isLoading,
        transactions,
        meta,
        handleLoadTransaction,
        queries, 
        setQueries,
        cleanQueries,
        analytics
    }
}
