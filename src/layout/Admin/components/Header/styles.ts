import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem;
  height: 5rem;
  border-bottom: 1px solid rgba(0, 0, 0, .9) !important;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.foreground};
  display: flex;;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`

export const Username = styled.strong`
  fons-size: 1.1rem;
`