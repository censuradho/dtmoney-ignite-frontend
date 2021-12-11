import { memo } from "react"
import { Outlet } from "react-router"

import { Header } from './components'

import * as Styles from './styles'


function BaseAdmin () {
  return (
    <Styles.Container>
      <Header />
      <Styles.Main>
        <Outlet />
      </Styles.Main>
    </Styles.Container>
  )
}

export const Admin = memo(BaseAdmin)