import axios, { AxiosError } from 'axios'

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

backend.interceptors.response.use(undefined, async (data: AxiosError<ErrorApi>) => {
  const { response } = data
    

  if (response && response?.status >= 400) {
    const {  error } = response.data

    response.data.error && error && openNotification(errorMessages[error.name], {
      type: 'error'
    })

    response.data.errors && openNotification(
      errorMessages[ERROR_CONSTANTS.VALIDATION_ERROR] || errorMessages[ERROR_CONSTANTS.DEFAULT], 
      {
        type: 'error'
      }
    )
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