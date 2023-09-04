import { useState } from 'react'

const useRegister = () => {
  const [modalContract, setModalContract] = useState(false)
  const [modalShipping, setModalShipping] = useState(false)
  const [modalBankAccount, setModalBankAccount] = useState(false)
  const [modalCreateManualTable, setModalCreateManualTable] = useState(false)
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

  const handleCloseModalCreateManualTable = () => {
    setModalCreateManualTable(false)
  }
  // All open modals

  const handleOpenModalCreateManualTable = () => {
    setModalCreateManualTable(true)
  }

  const handleOpenModalShipping = () => {
    setModalShipping(true)
  }

  const handleOpenModalContract = () => {
    setModalContract(true)
  }

  const handleOpenModalBankAccount = () => {
    setModalBankAccount(true)
  }

  return {
    statusBankAccount,
    statusShipping,
    statusContract,
    // Modal status
    modalContract,
    modalShipping,
    modalBankAccount,
    modalCreateManualTable,
    // Handle close and complete
    handleCloseAndCompleteModalShipping,
    handleCloseAndCompleteModalBankAccount,
    handleCloseAndCompleteModalContract,
    // Handle close only
    handleCloseModalContract,
    handleCloseModalShipping,
    handleCloseModalBankAccount,
    handleCloseModalCreateManualTable,
    // handle Open modals
    handleOpenModalCreateManualTable,
    handleOpenModalBankAccount,
    handleOpenModalContract,
    handleOpenModalShipping,
  }
}

export default useRegister
