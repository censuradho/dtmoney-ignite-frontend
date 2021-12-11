import { forwardRef, InputHTMLAttributes, memo } from 'react'

import * as Styles from './styles'

type InputProps  = Pick<InputHTMLAttributes<HTMLInputElement>, 
  'value' 
  | 'name' 
  | 'onChange' 
  | 'id' 
  | 'type' 
  | 'placeholder'
  >

const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Styles.Input {...props} ref={ref} />
))

export const Input = memo(BaseInput)