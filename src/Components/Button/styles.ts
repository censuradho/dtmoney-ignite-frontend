import styled, { DefaultTheme } from 'styled-components'



export interface ButtonProps {
  fullWidth?: boolean
  variante?: keyof DefaultTheme['buttons']
}

export const Button = styled.button<ButtonProps>`
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  padding: 0 1.5rem;
  height: 4rem;
  background: ${({ variante = 'blue', theme }) => theme.buttons[variante].background};
  color: ${({ variante = 'blue', theme }) => theme.buttons[variante].color};;
  border-radius: 0%.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  transition: filter 0.2s;
  height: 3rem;

  &:hover {
      filter: brightness(0.9);
  }
  &[disabled] {
    filter: brightness(0.7);
    cursor: not-allowed;
  }
`