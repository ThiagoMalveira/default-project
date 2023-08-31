import HandleNotification from '@resources/helpers/handleNotification'
import { typesNotification } from '@resources/types/notification'
import { ClientService } from '@services/client'
import { IProps } from './types'

export const useUpdateStatus = () => {
  const handleUpdateClient = ({ id, status }: IProps) => {
    const clienteId = id
    const clientestatusaprovacao = status

    ClientService.putClientStatus({
      clienteId,
      clientestatusaprovacao,
    })

    HandleNotification(typesNotification.SUCCESS, 'Alterado com sucesso!')
  }

  return { handleUpdateClient }
}
