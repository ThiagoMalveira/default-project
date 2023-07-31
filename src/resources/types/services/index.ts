export interface IAuthSignInResponse {
  access_token: string
}

export const initialAuthState: IAuthSignInResponse = {
  access_token: '',
}

export interface IVerificationCodeSendResponse {
  success: boolean
}
