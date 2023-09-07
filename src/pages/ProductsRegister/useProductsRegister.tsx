import { useState } from 'react'

const useProductsRegister = () => {
  const [statusProducts, setStatusProducts] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')
  const [stepProduct, setStepProduct] = useState(1)

  // status modals
  const [modalProducts, setModalProducts] = useState<boolean>(false)

  const handleOpenModalProducts = () => {
    setModalProducts(true)
  }

  const handleCloseModalProducts = () => {
    setModalProducts(false)
    setStepProduct(1)
  }

  const nextStepShipping = () => {
    if (stepProduct < 3) {
      setStepProduct(stepProduct + 1)
    }
  }

  const handleAddProduct = () => {
    setStatusProducts('CONCLUIDO')
    setStepProduct(1)
    setModalProducts(false)
  }

  const previousStepShipping = () => {
    if (stepProduct > 1) {
      setStepProduct(stepProduct - 1)
    }
  }

  return {
    statusProducts,
    handleOpenModalProducts,
    modalProducts,
    handleCloseModalProducts,
    nextStepShipping,
    previousStepShipping,
    stepProduct,
    handleAddProduct,
  }
}

export default useProductsRegister
