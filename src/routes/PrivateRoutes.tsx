import { routePaths } from 'constants/routes'
import { useSelector } from 'react-redux'
import { Navigate, Routes, useLocation, Route } from 'react-router-dom'

import { Admin } from 'layout'

import { Home } from 'pages'

export function PrivateRoutes () {
  const location = useLocation()
  const auth = useSelector(value => value.auth)

  if (!auth?.token) return <Navigate to={routePaths.public.login}  state={{ from: location }}/>

  return (
      <Routes>
        <Route path={routePaths.private.home} element={<Home />} />
        <Route path="*" element={<Navigate to={`/app${routePaths.private.home}`} />} />
      </Routes>
  )
}