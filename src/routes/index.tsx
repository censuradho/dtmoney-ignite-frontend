import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { routePaths } from 'constants/routes'

import { Login, Registration  } from 'pages'

import { PrivateRoutes } from './PrivateRoutes'
import UserProvider from 'Provider/UserProvider'
function  RootRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.private.root} element={<UserProvider><PrivateRoutes /></UserProvider>} />
        <Route path={routePaths.public.login} element={<Login />}  />
        <Route path={routePaths.public.registration} element={<Registration />}  />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRoutes