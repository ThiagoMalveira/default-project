import { useHandleNavigate } from '@hooks/useHandleNavigate'
import PathRoutes from '@route/PathRoutes'
import { useState } from 'react'

const useSalesAndBilling = () => {
  const { handleNavigate } = useHandleNavigate()
  const [stepBilling, setStepBilling] = useState<number>(1)

  const handleNextStep = () => {
    if (stepBilling < 2) {
      setStepBilling(stepBilling + 1)
    }
  }

  const handleNavigateToDashboard = () => {
    handleNavigate(PathRoutes.PANEL_DASHBOARD)
  }

  return {
    handleNextStep,
    stepBilling,
    handleNavigateToDashboard,
  }
}

export default useSalesAndBilling
