import { useEffect, useLayoutEffect, useState } from "react";
import Modal from 'react-modal'

import { Dashboard, Header, NewTransactionModal } from "Components";

import {  useTransactionContext } from "Provider/TransactionProvider";

import useBoolean from "hooks/useBoolean";

Modal.setAppElement('#root')

export function HomeComponent () {

  const { handleLoadTransaction, queries, setQueries, cleanQueries } = useTransactionContext()
  const [isNewTransactionModalOpen, toggleNewTransactionModalOpen] = useBoolean(false)

  const handleCloseModal = async () => {
    await handleLoadTransaction()


    toggleNewTransactionModalOpen()
  }


  useEffect(() => {
    handleLoadTransaction(queries)

    console.log(queries)
  }, [queries])

  return (
    <>
      <Header onOpenNewTransactionModal={toggleNewTransactionModalOpen}/>

      <Dashboard />

      <NewTransactionModal 
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseModal}
      />
    </>
  );
}
