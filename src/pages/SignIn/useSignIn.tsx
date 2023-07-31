import { useAppDispatch } from '@hooks/store'
import { fetchAuth } from '@store/auth/actions'
import { useFormik } from 'formik'
import { useCallback, useState } from 'react'
import { initialValues, useSignInSchema } from './schemas/useSignInSchema'

const useSignIn = () => {
  const dispatch = useAppDispatch()
  const [passwordType, setPasswordType] = useState<'password' | 'text'>(
    'password',
  )
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const formik = useFormik({
    initialValues,
    validationSchema: useSignInSchema,
    onSubmit: () => handleAuth(),
  })

  const fetchAuthenticate = useCallback((): void => {
    dispatch(fetchAuth(formik.values))
  }, [formik, dispatch])

  const handleAuth = useCallback((): void => {
    if (!formik.values.email || !formik.values.password) return

    fetchAuthenticate()
  }, [formik, fetchAuthenticate])

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

  return { togglePasswordType, passwordType, showPassword, formik }
}

export default useSignIn
