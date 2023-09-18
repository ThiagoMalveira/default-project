import { useState } from 'react'

const usePanelRegisterProducts = () => {
  const [stepProduct, setStepProduct] = useState(1)

  const nextStepShipping = () => {
    if (stepProduct < 3) {
      setStepProduct(stepProduct + 1)
    }
  }

  const previousStepShipping = () => {
    if (stepProduct > 1) {
      setStepProduct(stepProduct - 1)
    }
  }

  return { nextStepShipping, previousStepShipping, stepProduct }
}

export default usePanelRegisterProducts
