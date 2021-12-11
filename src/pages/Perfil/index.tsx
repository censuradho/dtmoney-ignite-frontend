import { Button, Input } from 'Components'
import { routePaths } from 'constants/routes'
import { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'

import { Navigate, useNavigate } from 'react-router-dom'
import { postPerfil } from 'services/perfil'

import * as Styles from './styles'

export function Perfil () {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const auth = useSelector(value => value.auth)
  
  if (auth.user.profile?.username) return <Navigate to={`${routePaths.private.app}${routePaths.private.home}`} />

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await postPerfil({
      username
    })
    navigate(`${routePaths.private.app}${routePaths.private.home}`)
  }

  return (
    <Styles.Main>
      <Styles.Container>
        <h1><span>📝</span><br/> Vamos registrar seu perfil! Nos diga seu nome:</h1>
        <Styles.Form onSubmit={handleSubmit}>
          <Input 
            placeholder="Digite seu nome" 
            value={username} 
            onChange={event => setUsername(event.target.value)}
          />
          <Button 
            fullWidth 
            variante="green"
            disabled={username.length < 3}
          >Continuar</Button>
        </Styles.Form>
      </Styles.Container>
    </Styles.Main>
  )
}