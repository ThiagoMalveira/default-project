import { getEnvOrDefault } from '@resources/utils/envs'

const { REACT_APP_API_URL: ENV_API_URL } = process.env

export const API_URL = getEnvOrDefault({ ENV_API_URL }, '')
