import UserProvider from "Provider/UserProvider"
import { memo } from "react"
import { Outlet } from "react-router"

import { Header } from './components'

import * as Styles from './styles'


function BaseAdmin () {
  return (
    <UserProvider>
      <Styles.Container>
        <Header />
        <Styles.Main>
          <Outlet />
        </Styles.Main>
      </Styles.Container>
    </UserProvider>
  )
}

export const Admin = memo(BaseAdmin)