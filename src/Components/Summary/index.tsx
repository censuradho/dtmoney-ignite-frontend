import { useEffect, useState } from 'react'
import { Analytics } from 'types/analytics';
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"


import { Container } from "./styles";

import { getAnalytics as getAnalyticsApi } from 'services/analytics'
import { useTransactions } from 'hooks/useTransactions';
import { useTransactionContext } from 'Provider/TransactionProvider';

const baseAnalytics: Analytics = {
    expense: 0,
    income: 0,
    total: 0
}

export function Summary() {
    const { analytics } = useTransactionContext()

    return(
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="ícone entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(analytics.income)}
                    
                </strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="ícone saídas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(analytics.expense)}
                </strong>
            </div>
            <div className="highLightBackground">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="ícone total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(analytics.total)}
                </strong>   
            </div>
        </Container>

    )
}