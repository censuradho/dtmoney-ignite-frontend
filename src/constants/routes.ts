
const publicRoutes = {
  login: '/login',
  registration: '/registration'
}

const privateRoutes = {
  root: '/app/*',
  home: '/home'  
}

export const routePaths = {
  public: publicRoutes,
  private: privateRoutes
}