import { useFormik } from 'formik'
import { useState } from 'react'
import { initialValues, useSignUpSchema } from './schemas/useSignUpSchema'

const useSignUp = () => {
  const [step, setStep] = useState<string>('1')

  const formik = useFormik({
    initialValues,
    validationSchema: useSignUpSchema,
    onSubmit: () => handleSignUp(),
  })

  const handleSignUp = () => {
    setStep('2')
  }

  return {
    step,
    formik,
  }
}

export default useSignUp
