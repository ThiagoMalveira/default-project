import HandleNotification from '@resources/helpers/handleNotification'
import { typesNotification } from '@resources/types/notification'

const useForgotPassword = () => {
  const handleForgotPassword = () => {
    HandleNotification(typesNotification.SUCCESS, 'O e-mail foi enviado!')
  }

  return { handleForgotPassword }
}

export default useForgotPassword
