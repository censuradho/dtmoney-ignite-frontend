import 'styled-components'

import { theme } from 'theme/templates'


type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}