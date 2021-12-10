import { IconButton } from 'Components'
import { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pushHistoryQuery } from 'utils/query'

import * as Styles from './styles'

interface PaginateProps {
  total: number,
  onChange: (index: number) => void;
}

function BasePaginate ({ total, onChange }: PaginateProps) {
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    const parsedValue = Number(value)

    if (parsedValue < 0 || parsedValue > total) return
    setCurrentPage(parsedValue)

  }

  const addPage = (value: number) => {
    setCurrentPage(prevState => prevState + value)

  }


  useEffect(() => {
    onChange?.(currentPage)
  }, [currentPage])
  
  return (
    <Styles.Container>
      <Styles.Label>{`${currentPage} de ${total}`}</Styles.Label>
      <input type="number" value={currentPage} onChange={handleChange} />
      <IconButton 
        onClick={() => currentPage > 1 && addPage(-1)}
        icon={{
          name: 'arrowLeft'
        }} 
      />
      <IconButton 
        onClick={() => currentPage < total && addPage(+1)}
        icon={{
          name: 'arrowRight'
        }} 
      />
    </Styles.Container>
  )
}

export const Paginate = memo(BasePaginate)