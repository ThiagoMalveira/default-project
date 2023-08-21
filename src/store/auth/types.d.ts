export type IPayload = {
  email: string
  password: string
}

export type IUser = {
  id: number | null
  email: string
  role: string[]
  accesstoken: string
  tokenType: string
}

export type ICredentials = {
  accessToken: string | null
}

export type IAuthState = {
  user: IUser
  credentials: {
    token: string | null
  } | null
  isLoading: boolean
  error: boolean
}
