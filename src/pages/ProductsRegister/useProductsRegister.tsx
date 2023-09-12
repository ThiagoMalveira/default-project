import { useHandleNavigate } from '@hooks/useHandleNavigate'
import PathRoutes from '@route/PathRoutes'
import { useEffect, useState } from 'react'

const useProductsRegister = () => {
  const { handleNavigate } = useHandleNavigate()
  const [statusProducts, setStatusProducts] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')
  const [isProductsRegistered, setIsProductsRegistered] =
    useState<boolean>(false)
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
    if (stepProduct < 4) {
      setStepProduct(stepProduct + 1)
    }
  }

  const handleCompleteProducts = () => {
    setIsProductsRegistered(true)
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

  useEffect(() => {
    if (isProductsRegistered) {
      handleNavigate(PathRoutes.SALES_AND_BILLING)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProductsRegistered])

  return {
    statusProducts,
    handleOpenModalProducts,
    modalProducts,
    handleCloseModalProducts,
    nextStepShipping,
    previousStepShipping,
    stepProduct,
    handleAddProduct,
    handleCompleteProducts,
  }
}

export default useProductsRegister
