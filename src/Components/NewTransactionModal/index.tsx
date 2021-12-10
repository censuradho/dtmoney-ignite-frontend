import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState} from 'react'

import { Input } from 'Components'
import { TRANSACTION_TYPE } from 'constants/transaction'
import { postTransaction } from 'services/transaction'
import { useTransactionContext } from 'Provider/TransactionProvider'

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}


export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  const { isLoading } = useTransactionContext()

  const [title, setTitle] = useState('') 
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState(TRANSACTION_TYPE.INCOME)

    async function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault()

      
      await postTransaction({
        amount,
        description: title,
        type: type as keyof typeof TRANSACTION_TYPE
      })

      setTitle('')
      setAmount(0)
      setType(TRANSACTION_TYPE.INCOME)
      
      onRequestClose()

    }


    return(
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >

        <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close">
            <img src={closeImg} alt="close modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>New Transaction</h2>

            <Input
              placeholder="Title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />

            <Input
              type="number" 
              placeholder="Amount"
              value={amount}
              onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
              <RadioBox 
              type="button"
              onClick={() => {setType(TRANSACTION_TYPE.INCOME)}}
              isActive={type === TRANSACTION_TYPE.INCOME}
              activeColor="green"
              >
                <img src={incomeImg} alt="income" />
                <span>Income</span>
              </RadioBox>

              <RadioBox 
              type="button"
              onClick={() => {setType(TRANSACTION_TYPE.EXPENSE)}}
              isActive={type === TRANSACTION_TYPE.EXPENSE}
              activeColor="red"
              >
                <img src={outcomeImg} alt="outcome" />
                <span>Outcome</span>
              </RadioBox>
            </TransactionTypeContainer>

            <button type="submit" disabled={isLoading}>
                Submit
            </button>
            
        </Container>
        </Modal>
    )
}