import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer, { authLogout } from '@store/auth/slice'
import clientReducer from '@store/clients/slice'
import segmentReducer from '@store/segment/slice'
import { Reducer } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  auth: authReducer,
  segment: segmentReducer,
  client: clientReducer,
})

const persistConfig = {
  key: 'konekte',
  storage,
  whitelist: ['auth', 'segment', 'client'],
}

const persistedReducer: Reducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export const persistor = persistStore(store)

export const clearStorage = async () => {
  return localStorage.clear()
}

export const removeStorage = async (key = 'konekte') => {
  return localStorage.removeItem(`persist:${key}`)
}

export const getStorage = async (key = 'konekte') => {
  return localStorage.getItem(`persist:${key}`)
}

export const clearStore = () => {
  authLogout()
  store.dispatch(authLogout())
}
