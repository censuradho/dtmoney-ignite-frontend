import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header"
import Modal from 'react-modal'
import { useState } from "react";
import {  GlobalStyle } from "./styles/global"
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;