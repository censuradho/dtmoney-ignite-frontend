import styled from 'styled-components'

export interface Style {
  _width?: number;
  _height?: number
}

export const Button = styled.button<Style>`
  width: ${({ _width }) => _width ? `${_width}rem` : '3rem'};
  height: ${({ _height }) => _height ? `${_height}rem` : '3rem'};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`