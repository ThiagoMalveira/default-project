import { useState } from 'react'

const useHeaderPartner = () => {
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false)

  const handleChangeModal = () => {
    setIsSettingOpen(!isSettingOpen)
  }

  return { handleChangeModal, isSettingOpen }
}

export default useHeaderPartner
