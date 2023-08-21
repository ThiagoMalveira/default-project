import axios, { AxiosInstance } from 'axios'
import { Navigate } from 'react-router-dom'

import { HttpCodes } from '@resources/types/httpCode'
import { IKeyArgHeader } from '@resources/types/service'
import PathRoutes from '@route/PathRoutes'
import { store } from '@store/index'

import { ApiGateway } from './configs/GatewayConfig'

let instance: null | AxiosInstance = null

export const getApiHeader = (args: IKeyArgHeader[] = []) => {
  const header = { headers: {} }

  if (!args.length) return header

  const arrayArgValues = [store.getState().auth.credentials]

  args.forEach((arg: IKeyArgHeader) => {
    if (!arrayArgValues[arg.index]) return

    header.headers[arg.field] = arrayArgValues[arg.index]
  })

  return header
}

const checkInstanceAuth = (instanceItem: AxiosInstance) => {
  instanceItem.interceptors.request.use(
    async (config) => {
      if (!config.headers) return Promise.reject(config.headers)

      const statesStore = store.getState()

      if (statesStore.auth?.credentials) {
        config.headers.Authorization = statesStore.auth?.credentials
      }

      return Promise.resolve(config)
    },
    async (error) => {
      return Promise.reject(error)
    },
  )
}

const checkResponseAuth = (instanceItem: AxiosInstance) => {
  instanceItem.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response === undefined) {
        return Promise.reject({
          message: error.message,
          config: error.config,
        })
      }

      if (error.response.status === HttpCodes.UNAUTHORIZED) {
        // store.dispatch(deleteAuth());

        const statesStore = store.getState()

        if (!statesStore.auth?.credentials?.accessToken) {
          return <Navigate to={PathRoutes.SIGN_OUT} replace />
        }
      }
    },
  )
}

export const getApiInstance = () => {
  if (instance) {
    checkInstanceAuth(instance)
    checkResponseAuth(instance)

    return instance
  }

  const INITIAL_SETTING = ApiGateway()

  instance = axios.create(INITIAL_SETTING)

  checkInstanceAuth(instance)
  checkResponseAuth(instance)

  return instance
}
