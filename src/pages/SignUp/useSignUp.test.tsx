// Generated by CodiumAI

import HandleNotification from '@resources/helpers/handleNotification'
import { typesNotification } from '@resources/types/notification'
import { ClientService } from '@services/client'
import { segmentSuccess } from '@store/segment/slice'
import dayjs from 'dayjs'
import { initialValues, useSignUpSchema } from './schemas/useSignUpSchema'
import useSignUp from './useSignUp'

describe('useSignUp', () => {
  // Test that the segments are fetched successfully when the useSignUp function is called
  it('should fetch segments successfully', () => {
    // Mock the dispatch function
    const dispatchMock = jest.fn()

    // Mock the useAppDispatch hook
    jest.spyOn(redux, 'useAppDispatch').mockReturnValue(dispatchMock)

    // Mock the useAppSelector hook
    jest.spyOn(redux, 'useAppSelector').mockReturnValue({ segments: [] })

    // Mock the fetchSegment action
    const fetchSegmentMock = jest.fn()

    // Mock the useDispatch hook
    jest.spyOn(redux, 'useDispatch').mockReturnValue(fetchSegmentMock)

    // Call the useSignUp function
    const result = useSignUp()

    // Check that the fetchSegment action is called
    expect(fetchSegmentMock).toHaveBeenCalled()

    // Check that the segments are empty initially
    expect(result.segments).toEqual([])

    // Check that the dispatch function is called with the segmentSuccess action
    expect(dispatchMock).toHaveBeenCalledWith(segmentSuccess(response))

    // Restore the mock implementations
    jest.restoreAllMocks()
  })

  // Test that handleDateChange sets the selectedDate state and formik field value correctly
  it('should set selectedDate and formik field value correctly when handleDateChange is called', () => {
    // Arrange
    const { handleDateChange, formik } = useSignUp()
    const date = new Date()
    const formattedDate = dayjs(date).format('DD/MM/YYYY')

    // Act
    handleDateChange(date)

    // Assert
    expect(formik.values.clienteDataFoundation).toBe(formattedDate)
    expect(formik.values.clienteDataFoundation).toBe(selectedDate)
  })

  // Test that the initialValues and validationSchema are set correctly in the formik object
  it('should set initialValues and validationSchema correctly', () => {
    // Arrange
    const expectedInitialValues = {
      clienteCnpj: '',
      clienteDataFoundation: '',
      clienteInscricaoMunicipal: null,
      clienteInscricaoEstadual: null,
      capacidadeEntrega: '',
      clienteEmailComercial: '',
      clienteTelefoneComercial: '',
      segmentos: [
        {
          segmentoId: 0,
          segmentoNome: '',
        },
      ],
    }

    const expectedValidationSchema = Yup.object().shape({
      clienteCnpj: Yup.string()
        .required('Campo obrigatório!')
        .test('valid-cnpj', 'CNPJ inválido', (value) => {
          if (!value) return false
          return isCNPJValid(value)
        }),
      clienteDataFoundation: Yup.string().required('Campo obrigatório!'),
      clienteInscricaoMunicipal: Yup.number()
        .required('Campo obrigatório!')
        .typeError('Utilize apenas números'),
      clienteInscricaoEstadual: Yup.number()
        .required('Campo obrigatório!')
        .typeError('Utilize apenas números'),
      capacidadeEntrega: Yup.string().required('Campo obrigatório!'),
      clienteEmailComercial: Yup.string()
        .required('Campo obrigatório!')
        .matches(
          /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
          'E-mail inválido!',
        ),
      clienteTelefoneComercial: Yup.string().matches(
        /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/g,
        'Telefone inválido!',
      ),
      segmento: Yup.array()
        .of(SegmentoSchema)
        .min(1, 'Selecione pelo menos uma opção')
        .required('Campo obrigatório'),
    })

    // Act
    const { initialValues, validationSchema } = useSignUp()

    // Assert
    expect(initialValues).toEqual(expectedInitialValues)
    expect(validationSchema).toEqual(expectedValidationSchema)
  })

  // Test that the Formik is reset after a successful client creation
  it('should reset Formik after successful client creation', () => {
    // Mock dependencies and setup initial state
    const mockDispatch = jest.fn()
    const mockFetchSegment = jest.fn()
    const mockHandleNotification = jest.fn()
    const mockSetLoading = jest.fn()
    const mockResetForm = jest.fn()
    const mockUseFormik = jest.fn().mockReturnValue({
      initialValues,
      validationSchema: useSignUpSchema,
      onSubmit: jest.fn(),
      setFieldValue: jest.fn(),
      resetForm: mockResetForm,
      values: {
        capacidadeEntrega: 'test',
        clienteCnpj: '123456789',
        clienteEmailComercial: 'test@test.com',
        clienteInscricaoEstadual: 123,
        clienteInscricaoMunicipal: 456,
        clienteTelefoneComercial: '1234567890',
        clienteDataFoundation: '01/01/2022',
        segmentos: [{ segmentoId: 1, segmentoNome: 'Test Segment' }],
      },
    })
    const mockUseAppDispatch = jest.fn().mockReturnValue(mockDispatch)
    const mockUseAppSelector = jest.fn().mockReturnValue({ segments: [] })
    const mockUseState = jest
      .fn()
      .mockReturnValueOnce(['1', jest.fn()]) // step state
      .mockReturnValueOnce([null, jest.fn()]) // selectedDate state
      .mockReturnValueOnce([false, mockSetLoading]) // loading state
    jest.mock('@hooks/store', () => ({
      useAppDispatch: mockUseAppDispatch,
      useAppSelector: mockUseAppSelector,
    }))
    jest.mock('formik', () => ({
      useFormik: mockUseFormik,
    }))
    jest.mock('@resources/helpers/handleNotification', () => ({
      __esModule: true,
      default: mockHandleNotification,
    }))
    jest.mock('@store/segment/action', () => ({
      fetchSegment: mockFetchSegment,
    }))
    jest.mock('@services/client', () => ({
      ClientService: {
        createClient: jest.fn().mockResolvedValueOnce(),
      },
    }))

    // Import the function after mocking the dependencies
    const { useSignUp } = require('./useSignUp')

    // Call the function
    const { handleSignUp, formik } = useSignUp()

    // Assert initial state
    expect(formik.resetForm).not.toHaveBeenCalled()

    // Call handleSignUp
    handleSignUp()

    // Assert that Formik is reset after successful client creation
    expect(formik.resetForm).toHaveBeenCalled()
  })

  // Test that the 'useSignUp' function calls 'ClientService.createClient' with the correct data and 'HandleNotification' is called with a success message
  it('should call createClient with correct data and call HandleNotification with success message', async () => {
    // Mock the dependencies
    const mockDispatch = jest.fn()
    const mockFetchSegment = jest.fn()
    const mockHandleNotification = jest.fn()
    const mockCreateClient = jest.fn()
    const mockResetForm = jest.fn()

    // Mock the formik values
    const formikValues = {
      capacidadeEntrega: 'test',
      clienteCnpj: '123456789',
      clienteEmailComercial: 'test@test.com',
      clienteInscricaoEstadual: 123,
      clienteInscricaoMunicipal: 456,
      clienteTelefoneComercial: '1234567890',
      clienteDataFoundation: '01/01/2022',
      segmentos: [{ segmentoId: 1, segmentoNome: 'Test Segment' }],
    }

    // Mock the formik resetForm function
    const mockResetForm = jest.fn()

    // Mock the formik useFormik hook
    jest.spyOn(formik, 'useFormik').mockReturnValue({
      initialValues,
      validationSchema: useSignUpSchema,
      onSubmit: () => handleSignUp(),
      values: formikValues,
      setFieldValue: jest.fn(),
      resetForm: mockResetForm,
    })

    // Mock the useAppDispatch and useAppSelector hooks
    jest.spyOn(hooks, 'useAppDispatch').mockReturnValue(mockDispatch)
    jest.spyOn(hooks, 'useAppSelector').mockReturnValue({ segments: [] })

    // Mock the fetchSegment function
    jest.spyOn(actions, 'fetchSegment').mockReturnValue(mockFetchSegment)

    // Mock the createClient function
    jest.spyOn(ClientService, 'createClient').mockReturnValue(mockCreateClient)

    // Mock the HandleNotification function
    jest
      .spyOn(HandleNotification, 'HandleNotification')
      .mockImplementation(mockHandleNotification)

    // Call the useSignUp function
    const { handleSignUp } = useSignUp()

    // Call the handleSignUp function
    await handleSignUp()

    // Assertions
    expect(mockCreateClient).toHaveBeenCalledWith({
      capacidadeEntrega: 'test',
      clienteCnpj: '123456789',
      clienteEmailComercial: 'test@test.com',
      clienteInscricaoEstadual: 123,
      clienteInscricaoMunicipal: 456,
      clienteTelefoneComercial: '1234567890',
      clienteDataFundacao: '2022-01-01',
      segmentos: [{ segmentoId: 1, segmentoNome: 'Test Segment' }],
    })
    expect(mockHandleNotification).toHaveBeenCalledWith(
      typesNotification.SUCCESS,
      'Foi criado com sucesso!',
    )
    expect(mockResetForm).toHaveBeenCalled()
  })

  // Test that the 'loading' state is set to false after a successful or failed client creation in the 'handleSignUp' function of the 'useSignUp' hook.
  it('should set loading to false when client creation is successful', async () => {
    const mockDispatch = jest.fn()
    const mockFetchSegment = jest.fn()
    const mockCreateClient = jest
      .spyOn(ClientService, 'createClient')
      .mockResolvedValueOnce({})
    const mockHandleNotification = jest.spyOn(HandleNotification, 'default')
    const mockResetForm = jest.fn()

    const { handleSignUp, loading, formik } = useSignUp()

    formik.resetForm = mockResetForm

    await handleSignUp()

    expect(loading).toBe(false)
    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockFetchSegment).toHaveBeenCalledTimes(1)
    expect(mockCreateClient).toHaveBeenCalledTimes(1)
    expect(mockHandleNotification).toHaveBeenCalledWith(
      typesNotification.SUCCESS,
      'Foi criado com sucesso!',
    )
    expect(mockResetForm).toHaveBeenCalledTimes(1)
  })

  // Test that the loading state is set to true before calling ClientService.createClient
  it('should set loading to true when calling handleSignUp', () => {
    const mockDispatch = jest.fn()
    const mockFetchSegment = jest.fn()
    const mockCreateClient = jest.spyOn(ClientService, 'createClient')
    const mockHandleNotification = jest.spyOn(HandleNotification, 'default')
    const mockSetStep = jest.fn()
    const mockResetForm = jest.fn()

    const mockFormikValues = {
      capacidadeEntrega: 'test',
      clienteCnpj: 'test',
      clienteEmailComercial: 'test',
      clienteInscricaoEstadual: 'test',
      clienteInscricaoMunicipal: 'test',
      clienteTelefoneComercial: 'test',
      clienteDataFoundation: 'test',
      segmentos: ['test'],
    }

    const mockFormik = {
      values: mockFormikValues,
      resetForm: mockResetForm,
    }

    const { handleSignUp, loading } = useSignUp()
    const setLoading = jest.fn()

    useStateMock.mockReturnValueOnce(['1', mockSetStep])
    useStateMock.mockReturnValueOnce([null, setSelectedDate])
    useStateMock.mockReturnValueOnce([false, setLoading])
    useAppDispatchMock.mockReturnValue(mockDispatch)
    useAppSelectorMock.mockReturnValue({ segments: [] })
    useFormikMock.mockReturnValue(mockFormik)

    handleSignUp()

    expect(setLoading).toHaveBeenCalledWith(true)
  })

  // Test that the Formik is reset after a failed client creation
  it('should reset Formik after failed client creation', () => {
    // Mock dependencies and setup initial state
    const mockDispatch = jest.fn()
    const mockFetchSegment = jest.fn()
    const mockHandleNotification = jest.fn()
    const mockSetLoading = jest.fn()
    const mockResetForm = jest.fn()
    const mockUseFormik = jest.fn().mockReturnValue({
      initialValues,
      validationSchema: useSignUpSchema,
      onSubmit: jest.fn(),
      setFieldValue: jest.fn(),
      resetForm: mockResetForm,
      values: {
        capacidadeEntrega: 'test',
        clienteCnpj: 'test',
        clienteEmailComercial: 'test',
        clienteInscricaoEstadual: 'test',
        clienteInscricaoMunicipal: 'test',
        clienteTelefoneComercial: 'test',
        clienteDataFoundation: 'test',
        segmentos: ['test'],
      },
    })
    const mockUseAppDispatch = jest.fn().mockReturnValue(mockDispatch)
    const mockUseAppSelector = jest.fn().mockReturnValue({ segments: [] })
    const mockUseState = jest
      .fn()
      .mockReturnValueOnce(['1', jest.fn()]) // step state
      .mockReturnValueOnce([null, jest.fn()]) // selectedDate state
      .mockReturnValueOnce([false, mockSetLoading]) // loading state
    jest.mock('@hooks/store', () => ({
      useAppDispatch: mockUseAppDispatch,
      useAppSelector: mockUseAppSelector,
    }))
    jest.mock('formik', () => ({
      useFormik: mockUseFormik,
    }))
    jest.mock('@resources/helpers/handleNotification', () => ({
      __esModule: true,
      default: mockHandleNotification,
    }))
    jest.mock('@store/segment/action', () => ({
      fetchSegment: mockFetchSegment,
    }))
    jest.mock('@services/client', () => ({
      ClientService: {
        createClient: jest
          .fn()
          .mockRejectedValueOnce(new Error('Failed to create client')),
      },
    }))

    // Import the function after mocking the dependencies
    const { useSignUp } = require('./useSignUp')

    // Call the function
    const { formik, handleSignUp } = useSignUp()

    // Test the initial state
    expect(formik.resetForm).not.toHaveBeenCalled()

    // Call handleSignUp
    handleSignUp()

    // Test that Formik is reset after failed client creation
    expect(formik.resetForm).toHaveBeenCalled()
  })

  // Test that the handleSignUp function correctly sets the value of clienteDataFundacao if clienteDataFoundation is not null
  it('should set clienteDataFundacao correctly when clienteDataFoundation is not null', () => {
    // Arrange
    const mockDispatch = jest.fn()
    const mockFetchSegment = jest.fn()
    const mockResetForm = jest.fn()
    const mockHandleNotification = jest.fn()
    const mockSetLoading = jest.fn()
    const mockSetStep = jest.fn()
    const mockUseFormik = jest.fn().mockReturnValue({
      initialValues,
      validationSchema: useSignUpSchema,
      onSubmit: jest.fn(),
      values: {
        capacidadeEntrega: 'test',
        clienteCnpj: 'test',
        clienteEmailComercial: 'test',
        clienteInscricaoEstadual: 'test',
        clienteInscricaoMunicipal: 'test',
        clienteTelefoneComercial: 'test',
        clienteDataFoundation: '2022-01-01',
        segmentos: [],
      },
      setFieldValue: jest.fn(),
      resetForm: mockResetForm,
    })
    const mockDayjs = jest.spyOn(dayjs, 'default').mockReturnValue({
      format: jest.fn().mockReturnValue('formattedDate'),
    })
    const mockClientService = {
      createClient: jest.fn(),
    }
    const mockHandleDateChange = jest.fn()

    // Act
    const result = useSignUp()

    // Assert
    expect(result.formik.values.clienteDataFoundation).toBe('formattedDate')
  })
})

// Test that the HandleNotification function is called with an error message when the response status is not HttpCodes.CREATED
it('should call HandleNotification with error message when response status is not HttpCodes.CREATED', () => {
  // Mock the necessary dependencies and variables
  const toastMock = {
    error: jest.fn(),
  }
  const useDispatchMock = jest.fn()
  const useSelectorMock = jest.fn()
  const formikValuesMock = {
    capacidadeEntrega: 'test',
    clienteCnpj: 'test',
    clienteEmailComercial: 'test',
    clienteInscricaoEstadual: 'test',
    clienteInscricaoMunicipal: 'test',
    clienteTelefoneComercial: 'test',
    clienteDataFoundation: 'test',
    segmentos: ['test'],
  }
  const formikResetFormMock = jest.fn()
  const dispatchMock = jest.fn()
  const fetchSegmentMock = jest.fn()
  const createClientMock = jest.fn()
  const setStepMock = jest.fn()
  const setLoadingMock = jest.fn()
  const setSelectedDateMock = jest.fn()
  const handleDateChangeMock = jest.fn()

  // Mock the necessary functions and values
  jest.mock('@hooks/store', () => ({
    useAppDispatch: useDispatchMock,
    useAppSelector: useSelectorMock,
  }))
  jest.mock('@resources/helpers/handleNotification', () => ({
    __esModule: true,
    default: jest.fn(),
  }))
  jest.mock('formik', () => ({
    useFormik: jest.fn().mockReturnValue({
      initialValues: formikValuesMock,
      validationSchema: {},
      onSubmit: jest.fn(),
      setFieldValue: jest.fn(),
      resetForm: formikResetFormMock,
    }),
  }))
  jest.mock('@store/segment/action', () => ({
    fetchSegment: fetchSegmentMock,
  }))
  jest.mock('@services/client', () => ({
    ClientService: {
      createClient: createClientMock,
    },
  }))
  jest.mock('react', () => ({
    useState: jest.fn().mockReturnValueOnce('1'),
    useEffect: jest.fn().mockImplementationOnce((callback) => callback()),
  }))
  jest.mock('dayjs', () => ({
    __esModule: true,
    default: jest.fn().mockReturnValueOnce({
      format: jest.fn().mockReturnValueOnce('test'),
    }),
  }))

  // Import the function after mocking the dependencies
  const { useSignUp } = require('./useSignUp')

  // Call the function
  const {
    handleSignUp,
    loading,
    step,
    formik,
    selectedDate,
    segments,
    handleDateChange,
  } = useSignUp()

  // Mock the necessary values
  formik.values = formikValuesMock

  // Call the handleSignUp function
  handleSignUp()

  // Check that the necessary functions and values were called/used correctly
  expect(setLoadingMock).toHaveBeenCalledWith(true)
  expect(createClientMock).toHaveBeenCalledWith({
    capacidadeEntrega: 'test',
    clienteCnpj: 'test',
    clienteEmailComercial: 'test',
    clienteInscricaoEstadual: 'test',
    clienteInscricaoMunicipal: 'test',
    clienteTelefoneComercial: 'test',
    clienteDataFundacao: 'test',
    segmentos: ['test'],
  })
  expect(HandleNotification).toHaveBeenCalledWith(
    typesNotification.ERROR,
    'Ocorreu algum problema!',
  )
  expect(setLoadingMock).toHaveBeenCalledWith(false)
  expect(setStepMock).toHaveBeenCalledWith('2')
  expect(formikResetFormMock).toHaveBeenCalled()
})

// Test that the 'step' state is set to '2' after a successful client creation
it('should set step to 2 when client creation is successful', () => {
  // Arrange
  const mockDispatch = jest.fn()
  const mockFetchSegment = jest.fn()
  const mockResetForm = jest.fn()
  const mockHandleNotification = jest.fn()
  const mockSetLoading = jest.fn()
  const mockSetStep = jest.fn()
  const mockUseAppDispatch = jest.fn(() => mockDispatch)
  const mockUseAppSelector = jest.fn()
  const mockUseFormik = jest.fn(() => ({
    initialValues,
    validationSchema: useSignUpSchema,
    onSubmit: jest.fn(),
    values: {
      capacidadeEntrega: '',
      clienteCnpj: '',
      clienteEmailComercial: '',
      clienteInscricaoEstadual: null,
      clienteInscricaoMunicipal: null,
      clienteTelefoneComercial: '',
      clienteDataFoundation: '',
      segmentos: [],
    },
    setFieldValue: jest.fn(),
    resetForm: mockResetForm,
  }))
  const mockDayjs = jest.fn(() => ({
    format: jest.fn(),
  }))
  const mockClientService = {
    createClient: jest.fn(),
  }
  const mockHandleDateChange = jest.fn()
  const mockUseSelector = jest.fn(() => ({
    segments: [],
  }))

  // Mock dependencies
  jest.mock('@hooks/store', () => ({
    useAppDispatch: mockUseAppDispatch,
    useAppSelector: mockUseAppSelector,
  }))
  jest.mock('@resources/helpers/handleNotification', () => ({
    __esModule: true,
    default: mockHandleNotification,
  }))
  jest.mock('@services/client', () => ({
    ClientService: mockClientService,
  }))
  jest.mock('dayjs', () => mockDayjs)
  jest.mock('formik', () => ({
    useFormik: mockUseFormik,
  }))

  // Import the function to test
  const { useSignUp } = require('./useSignUp')

  // Act
  const { handleSignUp, step, formik } = useSignUp()
  handleSignUp()

  // Assert
  expect(mockClientService.createClient).toHaveBeenCalled()
  expect(mockHandleNotification).toHaveBeenCalledWith(
    typesNotification.SUCCESS,
    'Foi criado com sucesso!',
  )
  expect(mockSetLoading).toHaveBeenCalledWith(false)
  expect(mockSetStep).toHaveBeenCalledWith('2')
  expect(mockResetForm).toHaveBeenCalled()
})
