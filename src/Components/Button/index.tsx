import { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import * as Styles from './styles'

type RootButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type' | 'disabled'>

interface ButtonProps extends RootButtonProps {
  children: ReactNode
}

function BaseButton ({ children, ...props}: ButtonProps) {
  return (
    <Styles.Button {...props}>{{ children }}</Styles.Button>
  )
}

export const Button = memo(BaseButton)