import React, {  useContext } from 'react'
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from '../../hooks/useTransactions';


import { Container } from "./styles";

export function Summary() {

    const { transactions } = useTransactions()
     
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

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
                                }).format(summary.deposits)}
                    
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
                                }).format(summary.withdraws)}
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
                                    }).format(summary.total)}
                </strong>   
            </div>
        </Container>

    )
}