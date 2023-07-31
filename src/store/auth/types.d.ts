export type IPayload = {
  email: string
  password: string
}

export type ICredentials = {
  token: string | null
}

export type IAuthState = {
  credentials: {
    token: string | null
  } | null
  isLoading: boolean
  error: boolean
}
