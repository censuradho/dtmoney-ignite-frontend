import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  input {
    width: 1px;
    height: 1px;
    opacity: 0;
    position: absolute;
  }
`
export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.green};
  text-align: left;
  background: none;
`