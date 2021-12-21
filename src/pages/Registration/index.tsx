import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Input } from 'Components'
import { Button } from 'Components/Button/styles'

import * as Styles from './styles'

import { SignInPayload, SignUpPayload } from 'types/auth'

import { signIn, signUp } from 'services/auth'
import { backend } from 'services/backend'


import { actionSignIn } from 'store/ducks/auth'
import { routePaths } from 'constants/routes'
import useBoolean from 'hooks/useBoolean'
import { setAuthHeader } from 'utils/setAuthHeader'
import { openNotification } from 'utils/notification'


export function Registration () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isLoading, toggleLoading] = useBoolean()

  const [payload, setPayload] = useState({
    email: '',
    password: ''
  } as SignUpPayload)

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
      
    await signUp(payload)
    
    openNotification('Cadastro realizado com sucesso!')


    navigate(routePaths.public.login)
    } catch (err) {} finally {
      toggleLoading()
    }
  }


  return (
    <Styles.Container>
      <h1>Cadastro</h1>
      <Styles.Form onSubmit={handleSubmit}>
        <Input placeholder="E-mail" name="email" value={payload.email} onChange={handleChange} />
        <Input placeholder="Password" type="password" name="password" value={payload.password} onChange={handleChange}/>
        <Button variante="green" disabled={isLoading} fullWidth>Confirmar</Button>
        <span>Tem uma conta? <Styles.Link to={routePaths.public.login}>Conecte-se</Styles.Link></span>
      </Styles.Form>
    </Styles.Container>
  )
}