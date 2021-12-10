import { InputHTMLAttributes, memo } from 'react'

import * as Styles from './styles'

type InputProps  = Pick<InputHTMLAttributes<HTMLInputElement>, 
  'value' 
  | 'name' 
  | 'onChange' 
  | 'id' 
  | 'type' 
  | 'placeholder'
  >

function BaseInput (props: InputProps) {
  return (
    <Styles.Input {...props}/>
  )
}

export const Input = memo(BaseInput)