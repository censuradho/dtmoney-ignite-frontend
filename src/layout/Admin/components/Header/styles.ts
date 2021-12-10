import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.foreground};
  justify-content: flex-end;
  display: flex;
`