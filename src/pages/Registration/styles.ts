import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

export const Form = styled.form`
  width: 100%;
  max-width: 30rem;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 4rem 1.2rem;
`