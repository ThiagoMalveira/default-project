import { toast } from 'react-toastify'

const HandleNotification = (type: string, msg: string): void => {
  const notification = () => {
    toast[type](msg)
  }

  notification()
}

export default HandleNotification
