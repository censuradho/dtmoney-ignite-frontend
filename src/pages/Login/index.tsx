import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Input } from 'Components'
import { Button } from 'Components/Button/styles'

import * as Styles from './styles'

import { SignInPayload } from 'types/auth'

import { signIn } from 'services/auth'
import { backend } from 'services/backend'


import { actionSignIn } from 'store/ducks/auth'
import { routePaths } from 'constants/routes'
import useBoolean from 'hooks/useBoolean'
import { setAuthHeader } from 'utils/setAuthHeader'
import { openNotification } from 'utils/notification'


export function Login () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isLoading, toggleLoading] = useBoolean()

  const [payload, setPayload] = useState({
    email: 'teste@email.com',
    password: '123'
  } as SignInPayload)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setPayload(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
    toggleLoading()
      
    const { data } = await signIn(payload)

    setAuthHeader(data.token)

    dispatch(actionSignIn(data))

    navigate(`/app${routePaths.private.home}`)
    } catch (err) {
    } finally {
      toggleLoading()
    }
  }


  return (
    <Styles.Container>
      <h1>Login</h1>
      <Styles.Form onSubmit={handleSubmit}>
        <Input placeholder="E-mail" name="email" value={payload.email} onChange={handleChange} />
        <Input placeholder="Password" type="password" name="password" value={payload.password} onChange={handleChange}/>
        <Button variante="green" disabled={isLoading} fullWidth>Login</Button>
        <span>Não tem uma conta? <Styles.Link to={routePaths.public.registration}>Cadastre-se</Styles.Link></span>
      </Styles.Form>
    </Styles.Container>
  )
}