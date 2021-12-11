
const publicRoutes = {
  login: '/login',
  registration: '/registration'
}

const privateRoutes = {
  root: '/app/*',
  app: '/app',
  home: '/home',
  perfil: '/perfil',
}

export const routePaths = {
  public: publicRoutes,
  private: privateRoutes
}