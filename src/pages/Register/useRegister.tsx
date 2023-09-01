import { useEffect, useState } from 'react'

const useRegister = () => {
  const [modalContract, setModalContract] = useState(false)
  const [modalShipping, setModalShipping] = useState(false)
  const [modalBankAccount, setModalBankAccount] = useState(false)
  const [statusContract, setStatusContract] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')
  const [statusShipping, setStatusShipping] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')
  const [statusBankAccount, setStatusBankAccount] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')

  useEffect(() => {
    console.log(statusContract)
  }, [statusContract])

  const handleCloseModalContract = () => {
    setModalContract(false)
  }

  const handleOpenAndFinishShipping = () => {
    setStatusShipping('CONCLUIDO')
    setModalShipping(true)
  }

  const handleOpenAndFinishContract = () => {
    setStatusContract('CONCLUIDO')
    setModalContract(true)
  }

  const handleOpenAndFinishBankAccount = () => {
    setStatusBankAccount('CONCLUIDO')
    setModalBankAccount(true)
  }

  return {
    statusBankAccount,
    statusShipping,
    statusContract,
    handleCloseModalContract,
    handleOpenAndFinishContract,
    handleOpenAndFinishShipping,
    modalContract,
    modalShipping,
    modalBankAccount,
    handleOpenAndFinishBankAccount,
  }
}

export default useRegister
