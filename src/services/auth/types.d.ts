export type IRequest = {
  email: string
  password: string
}

export interface IAuthSignInResponse {
  access_token: string
}
