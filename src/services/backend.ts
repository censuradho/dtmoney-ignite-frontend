import axios, { AxiosError } from 'axios'
import { Console } from 'console'
import { errorMessages, ERROR_CONSTANTS } from 'constants/errors'

import { refrashToken } from 'services/auth'
import { StoreRoot } from 'store'

import { actionRefrashToken, actionSignOut } from 'store/ducks/auth'
import { ErrorApi } from 'types/backend'
import { openNotification } from 'utils/notification'
import { setAuthHeader } from 'utils/setAuthHeader'

export const backend = axios.create({
  baseURL: 'http://localhost:3333'
})

backend.interceptors.response.use(config => {
  const { data } = config
    

  if (data && data.status >= 400) {
    const {  error } = data

    openNotification(errorMessages[error.name], {
      type: 'error'
    })
  }
  return config
}, async (data: AxiosError<ErrorApi>) => {
  const { response } = data
    

  if (response && response?.status >= 400) {
    const {  error } = response.data

    response.data.error && error && openNotification(errorMessages[error.name], {
      type: 'error'
    })

    response.data.errors && openNotification(errorMessages[ERROR_CONSTANTS.VALIDATION_ERROR], {
      type: 'error'
    })
  }

  throw response;
})

export const netWorkService = {
  setInterceptor: (store: StoreRoot) => {

    backend.interceptors.request.use(undefined, async (data: AxiosError<ErrorApi>) => {
  
        const { response } = data
    
        if (response?.status === 401) {
          
          try {
            const { data } = await refrashToken()

           setAuthHeader(data.token)

            store.dispatch(actionRefrashToken(data))

          } catch (err) {
            store.dispatch(actionSignOut())
            throw err
          }
        }
      
        throw response;
    
    
    })
  }
}

export default backend