import { useAppDispatch, useAppSelector } from '@hooks/store'
import { useHandleNavigate } from '@hooks/useHandleNavigate'
import HandleNotification from '@resources/helpers/handleNotification'
import { typesNotification } from '@resources/types/notification'
import PathRoutes from '@route/PathRoutes'
import { fetchAuth } from '@store/auth/action'
import { useFormik } from 'formik'
import { useCallback, useEffect, useState } from 'react'
import { initialValues, useSignInSchema } from './schemas/useSignInSchema'

const useSignIn = () => {
  const { authLoading, credentials, signError, user } = useAppSelector(
    (state) => state.auth,
  )
  const { handleNavigate } = useHandleNavigate()
  const dispatch = useAppDispatch()
  const [passwordType, setPasswordType] = useState<'password' | 'text'>(
    'password',
  )
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const formik = useFormik({
    initialValues,
    validationSchema: useSignInSchema,
    onSubmit: () => handleAuth(),
    validateOnBlur: false,
    validateOnChange: false,
  })

  const fetchAuthenticate = useCallback((): void => {
    dispatch(fetchAuth(formik.values))
  }, [formik, dispatch])

  const handleAuth = useCallback((): void => {
    if (!formik.values.email || !formik.values.password) return

    fetchAuthenticate()
  }, [formik, fetchAuthenticate])

  useEffect(() => {
    if (!credentials) return

    if (user.roles.includes('ROLE_ADMIN')) {
      handleNavigate(PathRoutes.PARTNERS)
    }
    const MOCK = 'APROVADO_NODOC'

    if (user.roles.includes('ROLE_USER')) {
      if (user.status === 'APROVADO_NODOC' || MOCK) {
        handleNavigate(PathRoutes.REGISTER)
      }
      if (user.status === 'APROVADO') {
        handleNavigate(PathRoutes.PANEL_PARTNER)
      }
    }
  }, [user, credentials, handleNavigate])

  useEffect(() => {
    if (signError) {
      HandleNotification(typesNotification.ERROR, 'Login e/ou senha incorretos')
    }
  }, [signError])

  const togglePasswordType = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      setShowPassword(true)
      return
    } else {
      setPasswordType('password')
      setShowPassword(false)
      return
    }
  }

  return { togglePasswordType, passwordType, showPassword, formik, authLoading }
}

export default useSignIn
