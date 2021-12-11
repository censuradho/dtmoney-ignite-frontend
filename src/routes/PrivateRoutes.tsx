import { routePaths } from 'constants/routes'
import { useSelector } from 'react-redux'
import { Navigate, Routes, useLocation, Route } from 'react-router-dom'

import { Admin } from 'layout'

import { Home, Perfil } from 'pages'

export function PrivateRoutes () {
  const location = useLocation()
  const auth = useSelector(value => value.auth)

  if (!auth?.token) return <Navigate to={routePaths.public.login}  state={{ from: location }}/>
  if (!auth.user.profile) return <Route path={routePaths.private.perfil} element={<Perfil />} />
  
  return (

      <Routes>
        <Route element={<Admin />}>
          <Route path={routePaths.private.home} element={<Home />} />
        </Route>
        
      </Routes>
  )
}