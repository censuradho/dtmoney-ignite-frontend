import {  ReactNode } from 'react'

import { Login, Home } from 'pages'
import { routePaths } from 'constants/routes'

interface Route {
  component: ReactNode;
  path: string;
}

export const publicRoutes: Route[] = [
  {
    component: Login,
    path: routePaths.public.login,
  }
]

export const privateRoutes: Route[] = [
  {
    component: Home,
    path: routePaths.private.home,
  }
]