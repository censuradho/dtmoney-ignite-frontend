import { memo } from "react"
import { useDispatch } from "react-redux"

import { IconButton } from 'Components'

import * as Styles from './styles'

import { actionSignOut } from 'store/ducks/auth'

import { signOut } from "services/auth"
import backend from "services/backend"

function BaseHeader () {
  const dispatch = useDispatch()
  
  const handleSignOut = async () => {
    await signOut()
    dispatch(actionSignOut())
    delete backend.defaults.headers.common.authorization

  }

  return (
    <Styles.Header>
      <IconButton onClick={handleSignOut} icon={{
        name: 'power'
      }} />
    </Styles.Header>
  )
}

export const Header = memo(BaseHeader)