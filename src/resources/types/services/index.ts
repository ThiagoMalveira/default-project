export interface IAuthSignInResponse {
  accessToken: string
}

export const initialAuthState: IAuthSignInResponse = {
  accessToken: '',
}

export interface IVerificationCodeSendResponse {
  success: boolean
}
