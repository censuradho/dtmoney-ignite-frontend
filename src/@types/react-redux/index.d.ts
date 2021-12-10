import 'react-redux'

import { StoreReduceer } from 'store'

declare module 'react-redux' {
  export interface DefaultRootState extends StoreReduceer {}
}