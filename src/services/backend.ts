import axios, { AxiosError } from 'axios'

import { refrashToken } from 'services/auth'
import { StoreRoot } from 'store'

import { actionRefrashToken, actionSignOut } from 'store/ducks/auth'
import { setAuthHeader } from 'utils/setAuthHeader'

export const backend = axios.create({
  baseURL: 'http://localhost:3333'
})


export const netWorkService = {
  setInterceptor: (store: StoreRoot) => {

    backend.interceptors.request.use(undefined, async (data: AxiosError) => {
  
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