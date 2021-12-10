import backend from "services/backend"

export function setAuthHeader (token: string)  {
  backend.defaults.headers.common.authorization = `Bearer ${token}`
}