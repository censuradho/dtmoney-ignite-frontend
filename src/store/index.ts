import { createStore, Store  } from 'redux'

import reducers from './ducks'

import { netWorkService } from 'services/backend'

const store = createStore(reducers)


export type StoreReduceer = ReturnType<typeof reducers>

export type StoreRoot = Store<StoreReduceer>

netWorkService.setInterceptor(store)

export default store

