import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    text-align: center;

    span {
      font-size: 3rem
    }
  }
`

export const Form = styled.form`
  width: 100%;
`