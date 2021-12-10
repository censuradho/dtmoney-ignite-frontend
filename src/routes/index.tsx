import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { routePaths } from 'constants/routes'

import {  RequireComponent } from './components'

import { Login, Registration  } from 'pages'

import { Admin } from 'layout'

import { PrivateRoutes } from './PrivateRoutes'
function  RootRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Admin />}>
          <Route path={routePaths.private.root} element={<PrivateRoutes />} />
          <Route path="*" element={<Navigate to={`/app${routePaths.private.home}`} />} />
        </Route>
        <Route path={routePaths.public.login} element={<Login />}  />
        <Route path={routePaths.public.registration} element={<Registration />}  />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRoutes