import useRegister from './useRegister'

describe('useRegister', () => {
  it('should initialize all modal states as false', () => {
    const { modalContract, modalShipping, modalBankAccount } = useRegister()

    expect(modalContract).toBe(false)
    expect(modalShipping).toBe(false)
    expect(modalBankAccount).toBe(false)
  })

  it('should set modalContract to false when handleCloseModalContract is called', () => {
    const { handleCloseModalContract, modalContract } = useRegister()

    handleCloseModalContract()

    expect(modalContract).toBe(false)
  })

  it('should initialize all status states as pendente when the useRegister function is called', () => {
    const { statusBankAccount, statusShipping, statusContract } = useRegister()

    expect(statusBankAccount).toBe('PENDENTE')
    expect(statusShipping).toBe('PENDENTE')
    expect(statusContract).toBe('PENDENTE')
  })

  it('should set statusShipping and modalShipping correctly when handleOpenAndFinishShipping is called', () => {
    const { handleOpenAndFinishShipping, statusShipping, modalShipping } =
      useRegister()

    handleOpenAndFinishShipping()

    expect(statusShipping).toBe('CONCLUIDO')
    expect(modalShipping).toBe(true)
  })

  it('should set statusContract and modalContract correctly when handleOpenAndFinishContract is called', () => {
    const { handleOpenAndFinishContract, statusContract, modalContract } =
      useRegister()

    handleOpenAndFinishContract()

    expect(statusContract).toBe('CONCLUIDO')
    expect(modalContract).toBe(true)
  })

  it('should set statusBankAccount and modalBankAccount correctly when handleOpenAndFinishBankAccount is called', () => {
    const {
      statusBankAccount,
      modalBankAccount,
      handleOpenAndFinishBankAccount,
    } = useRegister()

    expect(statusBankAccount).toBe('PENDENTE')
    expect(modalBankAccount).toBe(false)

    handleOpenAndFinishBankAccount()

    expect(statusBankAccount).toBe('CONCLUIDO')
    expect(modalBankAccount).toBe(true)
  })

  it('should not throw errors when called with correct arguments', () => {
    const {
      handleCloseModalContract,
      handleOpenAndFinishContract,
      handleOpenAndFinishShipping,
      handleOpenAndFinishBankAccount,
    } = useRegister()

    expect(() => handleCloseModalContract()).not.toThrow()
    expect(() => handleOpenAndFinishContract()).not.toThrow()
    expect(() => handleOpenAndFinishShipping()).not.toThrow()
    expect(() => handleOpenAndFinishBankAccount()).not.toThrow()
  })

  it('should not throw an error when called multiple times', () => {
    expect(() => {
      useRegister()
      useRegister()
      useRegister()
    }).not.toThrow()
  })

  it('should return an object with the expected property types', () => {
    const result = useRegister()

    expect(result).toHaveProperty('statusBankAccount')
    expect(result).toHaveProperty('statusShipping')
    expect(result).toHaveProperty('statusContract')
    expect(result).toHaveProperty('handleCloseModalContract')
    expect(result).toHaveProperty('handleOpenAndFinishContract')
    expect(result).toHaveProperty('handleOpenAndFinishShipping')
    expect(result).toHaveProperty('modalContract')
    expect(result).toHaveProperty('modalShipping')
    expect(result).toHaveProperty('modalBankAccount')
    expect(result).toHaveProperty('handleOpenAndFinishBankAccount')
  })

  it('should return an object with all the expected properties', () => {
    const result = useRegister()

    expect(result).toHaveProperty('statusBankAccount')
    expect(result).toHaveProperty('statusShipping')
    expect(result).toHaveProperty('statusContract')
    expect(result).toHaveProperty('handleCloseModalContract')
    expect(result).toHaveProperty('handleOpenAndFinishContract')
    expect(result).toHaveProperty('handleOpenAndFinishShipping')
    expect(result).toHaveProperty('modalContract')
    expect(result).toHaveProperty('modalShipping')
    expect(result).toHaveProperty('modalBankAccount')
    expect(result).toHaveProperty('handleOpenAndFinishBankAccount')
  })

  it('should return an object with the expected property values', () => {
    const result = useRegister()

    expect(result.statusBankAccount).toBe('PENDENTE')
    expect(result.statusShipping).toBe('PENDENTE')
    expect(result.statusContract).toBe('PENDENTE')
    expect(result.modalContract).toBe(false)
    expect(result.modalShipping).toBe(false)
    expect(result.modalBankAccount).toBe(false)

    result.handleCloseModalContract()
    expect(result.modalContract).toBe(false)

    result.handleOpenAndFinishShipping()
    expect(result.statusShipping).toBe('CONCLUIDO')
    expect(result.modalShipping).toBe(true)

    result.handleOpenAndFinishContract()
    expect(result.statusContract).toBe('CONCLUIDO')
    expect(result.modalContract).toBe(true)

    result.handleOpenAndFinishBankAccount()
    expect(result.statusBankAccount).toBe('CONCLUIDO')
    expect(result.modalBankAccount).toBe(true)
  })

  it('should not mutate states outside of their respective functions', () => {
    const {
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
    } = useRegister()

    expect(statusBankAccount).toBe('PENDENTE')
    expect(statusShipping).toBe('PENDENTE')
    expect(statusContract).toBe('PENDENTE')
    expect(modalContract).toBe(false)
    expect(modalShipping).toBe(false)
    expect(modalBankAccount).toBe(false)

    handleCloseModalContract()
    handleOpenAndFinishContract()
    handleOpenAndFinishShipping()
    handleOpenAndFinishBankAccount()

    expect(statusBankAccount).toBe('PENDENTE')
    expect(statusShipping).toBe('PENDENTE')
    expect(statusContract).toBe('PENDENTE')
    expect(modalContract).toBe(false)
    expect(modalShipping).toBe(false)
    expect(modalBankAccount).toBe(false)
  })

  it('should return the expected values and update the state correctly', () => {
    const {
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
    } = useRegister()

    expect(statusBankAccount).toBe('PENDENTE')
    expect(statusShipping).toBe('PENDENTE')
    expect(statusContract).toBe('PENDENTE')
    expect(modalContract).toBe(false)
    expect(modalShipping).toBe(false)
    expect(modalBankAccount).toBe(false)

    handleCloseModalContract()
    expect(modalContract).toBe(false)

    handleOpenAndFinishShipping()
    expect(statusShipping).toBe('CONCLUIDO')
    expect(modalShipping).toBe(true)

    handleOpenAndFinishContract()
    expect(statusContract).toBe('CONCLUIDO')
    expect(modalContract).toBe(true)

    handleOpenAndFinishBankAccount()
    expect(statusBankAccount).toBe('CONCLUIDO')
    expect(modalBankAccount).toBe(true)
  })
})
