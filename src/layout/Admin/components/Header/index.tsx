import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Flex } from "styles/global"

import { IconButton } from 'Components'

import * as Styles from './styles'

import { actionSignOut } from 'store/ducks/auth'

import { signOut } from "services/auth"
import backend from "services/backend"

import { useNavigate } from 'react-router-dom'
import { routePaths } from "constants/routes"

function BaseHeader () {
  const navigate = useNavigate()
  const auth = useSelector(value => value.auth)

  const dispatch = useDispatch()
  
  const handleSignOut = async () => {
    await signOut()
    dispatch(actionSignOut())
    delete backend.defaults.headers.common.authorization

  }

  return (
    <Styles.Header>
      {auth.user.profile && <Styles.Username>{auth.user.profile?.username}</Styles.Username>}
      <Flex gap={1} flex={1} justifyContent="flex-end">
        <IconButton onClick={handleSignOut} icon={{
          name: 'power'
        }} />
        <IconButton onClick={() => navigate(`${routePaths.private.app}${routePaths.private.perfil}`)} icon={{
          name: 'settings'
        }} />
      </Flex>
    </Styles.Header>
  )
}

export const Header = memo(BaseHeader)