import { getEnvOrDefault } from '@resources/utils/envs'

const { VITE_APP_API_URL: ENV_API_URL } = import.meta.env

export const API_URL = getEnvOrDefault({ ENV_API_URL }, '')
