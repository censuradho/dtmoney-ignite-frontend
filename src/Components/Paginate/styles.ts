import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    background: ${({ theme }) => theme.colors.foreground};
    border: none;

    padding: 1rem;
  }
`
export const Label = styled.span`

`