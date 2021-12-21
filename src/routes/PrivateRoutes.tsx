import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Routes, useLocation, Route, useNavigate } from 'react-router-dom'

import { Admin } from 'layout'

import { routePaths } from 'constants/routes'
import { Home } from 'pages'

export function PrivateRoutes () {
  const auth = useSelector(value => value.auth)
  const navigation = useNavigate()


useEffect(() => {
  if (!auth?.token) navigation(routePaths.public.login)
}, [auth])
  
if (!auth?.token) return null

  return (
      <Routes>
        <Route element={<Admin />}>
          <Route path={routePaths.private.home} element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to={`${routePaths.private.app}${routePaths.private.home}`} />} />
      </Routes>
  )
}