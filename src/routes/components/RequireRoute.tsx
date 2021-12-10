import { memo } from 'react'

import { routePaths } from 'constants/routes';

import { useSelector } from "react-redux"

import { Navigate, useLocation  } from "react-router-dom";

interface BaseRequireComponentProps {
  children: any
}

export function BaseRequireComponent({ children }: BaseRequireComponentProps) {

  const auth = useSelector(value => value.auth)
  const location = useLocation();

  
  if (!auth?.token) return <Navigate to={routePaths.public.login}  state={{ from: location }}/>
    
  return children;
}

export const RequireComponent = memo(BaseRequireComponent);
