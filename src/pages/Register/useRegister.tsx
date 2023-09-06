import { useState } from 'react'

const useRegister = () => {
  // Status modals
  const [modalContract, setModalContract] = useState(false)
  const [modalShipping, setModalShipping] = useState(false)
  const [modalBankAccount, setModalBankAccount] = useState(false)
  const [stepShipping, setStepShipping] = useState(1)

  // Status Cards
  const [statusContract, setStatusContract] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')
  const [statusShipping, setStatusShipping] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')
  const [statusBankAccount, setStatusBankAccount] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')

  // All close and complete
  const handleCloseAndCompleteModalContract = () => {
    setModalContract(false)
    setStatusContract('CONCLUIDO')
  }

  const handleCloseAndCompleteModalShipping = () => {
    setModalShipping(false)
    setStatusShipping('CONCLUIDO')
    setStepShipping(1)
  }

  const handleCloseAndCompleteModalBankAccount = () => {
    setModalBankAccount(false)
    setStatusBankAccount('CONCLUIDO')
  }

  // All close only

  const handleCloseModalContract = () => {
    setModalContract(false)
  }

  const handleCloseModalShipping = () => {
    setModalShipping(false)
  }

  const handleCloseModalBankAccount = () => {
    setModalBankAccount(false)
  }
  // All open modals

  const handleOpenModalShipping = () => {
    setModalShipping(true)
  }

  const handleOpenModalContract = () => {
    setModalContract(true)
  }

  const handleOpenModalBankAccount = () => {
    setModalBankAccount(true)
  }

  const nextStepShipping = () => {
    setStepShipping(stepShipping + 1)
  }

  const previousStepShipping = () => {
    setStepShipping(stepShipping - 1)
  }

  return {
    statusBankAccount,
    statusShipping,
    statusContract,
    // Modal status
    modalContract,
    modalShipping,
    modalBankAccount,
    // Handle close and complete
    handleCloseAndCompleteModalShipping,
    handleCloseAndCompleteModalBankAccount,
    handleCloseAndCompleteModalContract,
    // Handle close only
    handleCloseModalContract,
    handleCloseModalShipping,
    handleCloseModalBankAccount,
    // handle Open modals
    handleOpenModalBankAccount,
    handleOpenModalContract,
    handleOpenModalShipping,
    // Steps
    nextStepShipping,
    previousStepShipping,
    stepShipping,
  }
}

export default useRegister
