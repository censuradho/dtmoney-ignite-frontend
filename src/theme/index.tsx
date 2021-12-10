import { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { theme } from './templates'

import { GlobalStyle } from 'styles/global'

interface ThemeProvicerProps {
  children: ReactNode
}

function ThemeProvider (props: ThemeProvicerProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider