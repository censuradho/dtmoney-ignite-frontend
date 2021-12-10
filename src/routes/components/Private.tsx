import { routePaths } from 'constants/routes';
import { memo } from 'react'
import { useSelector } from 'react-redux';

import { Route, useLocation, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: JSX.Element
  path: string
}
function BasePrivateRoute (props: PrivateRouteProps) {
  const auth = useSelector(value => value.auth)
  const location = useLocation();

  if (!auth?.token) return <Route element={<Navigate to={routePaths.public.login}  state={{ from: location }}/>} />

  return (
    <Route path={props.path} element={props.element} />
  )
}

export const PrivateRoute = memo(BasePrivateRoute)