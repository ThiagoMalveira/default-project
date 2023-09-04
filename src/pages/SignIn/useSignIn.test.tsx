

import HandleNotification from "@resources/helpers/handleNotification";
import { typesNotification } from "@resources/types/notification";
import PathRoutes from "@route/PathRoutes";
import { fetchAuth } from "@store/auth/action";
import { fireEvent, renderHook } from "@testing-library/react";
import { it } from "node:test";
import React from "react";
import { toast } from "react-toastify";
import { initialValues, useSignInSchema } from "./schemas/useSignInSchema";
import useSignIn from "./useSignIn";

describe('useSignIn', () => {

    it('should toggle password visibility when togglePasswordType is called', () => {
      const { togglePasswordType, passwordType, showPassword } = useSignIn();

      expect(passwordType).toBe('password');
      expect(showPassword).toBe(false);

      togglePasswordType();

      expect(passwordType).toBe('text');
      expect(showPassword).toBe(true);

      togglePasswordType();

      expect(passwordType).toBe('password');
      expect(showPassword).toBe(false);
    });


    it('should display error notification when user does not fill in email or password fields and submits form', () => {

      const { formik } = useSignIn()
      const toastSpy = jest.spyOn(toast, 'error')


      formik.handleSubmit()


      expect(toastSpy).toHaveBeenCalledWith('Login e/ou senha incorretos')
    });


    it('should set formik values and call fetchAuthenticate when form is submitted', () => {

      const { togglePasswordType, passwordType, showPassword, formik, authLoading } = useSignIn()
      const dispatchMock = jest.fn()
      const handleNavigateMock = jest.fn()
      const fetchAuthMock = jest.fn()
      const toastErrorMock = jest.fn()


      jest.mock('@hooks/store', () => ({
        useAppDispatch: () => dispatchMock,
        useAppSelector: jest.fn(),
      }))
      jest.mock('@hooks/useHandleNavigate', () => ({
        useHandleNavigate: () => ({
          handleNavigate: handleNavigateMock,
        }),
      }))
      jest.mock('formik', () => ({
        useFormik: jest.fn().mockReturnValue({
          initialValues,
          validationSchema: useSignInSchema,
          onSubmit: jest.fn(),
          values: {
            email: 'test@example.com',
            password: 'password123',
          },
        }),
      }))
      jest.mock('@store/auth/action', () => ({
        fetchAuth: fetchAuthMock,
      }))
      jest.mock('@resources/helpers/handleNotification', () => ({
        __esModule: true,
        default: jest.fn(),
        typesNotification: {
          ERROR: 'error',
          SUCCESS: 'success',
          INFO: 'info',
          WARNING: 'warning',
          DEFAULT: 'default',
        },
      }))


      const { formik: formikResult } = useSignIn()
      formikResult.onSubmit()


      expect(formik.values.email).toBe('test@example.com')
      expect(formik.values.password).toBe('password123')
      expect(fetchAuthMock).toHaveBeenCalled()
    });


    it('should display formik validation error message when user enters invalid email format and submits form', () => {

      const { formik } = useSignIn();
      const emailInput = 'test';
  
      fireEvent.changeText(formik.getFieldProps('email').onChange, emailInput);
      fireEvent.press(formik.handleSubmit);
  
      expect(formik.errors.email).toBe('Insira um e-mail válido!');
    });


    it('should toggle password visibility back to hidden after a few seconds', () => {

    });


    it('should redirect user to the correct page based on role and status', () => {

      const authLoading = false;
      const credentials = true;
      const signError = false;
      const user = {
        roles: ['ROLE_USER'],
        status: 'APROVADO',
      };
      const handleNavigate = jest.fn();
      const dispatch = jest.fn();
      const setPasswordType = jest.fn();
      const setShowPassword = jest.fn();
      const formik = {
        values: {
          email: 'test@example.com',
          password: 'password',
        },
      };
      const fetchAuthenticate = jest.fn();
      const handleAuth = jest.fn();


      jest.spyOn(hooks, 'useAppSelector').mockReturnValue({ authLoading, credentials, signError, user });
      jest.spyOn(hooks, 'useHandleNavigate').mockReturnValue({ handleNavigate });
      jest.spyOn(hooks, 'useAppDispatch').mockReturnValue(dispatch);
      jest.spyOn(React, 'useState').mockReturnValueOnce(['password', setPasswordType]);
      jest.spyOn(React, 'useState').mockReturnValueOnce([false, setShowPassword]);
      jest.spyOn(formik, 'useFormik').mockReturnValue(formik);
      jest.spyOn(React, 'useCallback').mockImplementation((callback) => callback);
      jest.spyOn(React, 'useEffect').mockImplementation((effect) => effect());


      const { togglePasswordType, passwordType, showPassword, formik: formikResult, authLoading: authLoadingResult } = useSignIn();


      expect(togglePasswordType).toBeInstanceOf(Function);
      expect(passwordType).toBe('password');
      expect(showPassword).toBe(false);
      expect(formikResult).toBe(formik);
      expect(authLoadingResult).toBe(authLoading);
      expect(fetchAuthenticate).toHaveBeenCalled();
      expect(handleAuth).toHaveBeenCalled();
      expect(handleNavigate).toHaveBeenCalledWith(PathRoutes.PANEL_PARTNER);
    });


    it('should display error notification when authentication fails', () => {

      const authLoading = false;
      const credentials = null;
      const signError = true;
      const user = null;
      const handleNavigate = jest.fn();
      const dispatch = jest.fn();
      const setPasswordType = jest.fn();
      const setShowPassword = jest.fn();
      const formik = {
        values: {
          email: 'test@example.com',
          password: 'password123',
        },
      };
      const fetchAuthenticate = jest.fn();
      const handleAuth = jest.fn();


      jest.spyOn(hooks, 'useAppSelector').mockReturnValue({ authLoading, credentials, signError, user });
      jest.spyOn(hooks, 'useHandleNavigate').mockReturnValue({ handleNavigate });
      jest.spyOn(hooks, 'useAppDispatch').mockReturnValue(dispatch);
      jest.spyOn(React, 'useState').mockReturnValueOnce(['password', setPasswordType]);
      jest.spyOn(React, 'useState').mockReturnValueOnce([false, setShowPassword]);
      jest.spyOn(formik, 'useFormik').mockReturnValue(formik);
      jest.spyOn(React, 'useCallback').mockImplementation((callback) => callback);
      jest.spyOn(React, 'useEffect').mockImplementation((effect) => effect());


      const result = useSignIn();


      expect(result.togglePasswordType).toBe(setPasswordType);
      expect(result.passwordType).toBe('password');
      expect(result.showPassword).toBe(false);
      expect(result.formik).toBe(formik);
      expect(result.authLoading).toBe(authLoading);

      expect(fetchAuthenticate).toHaveBeenCalledTimes(1);
      expect(handleAuth).toHaveBeenCalledTimes(1);
      expect(handleNavigate).not.toHaveBeenCalled();
      expect(dispatch).not.toHaveBeenCalled();
      expect(HandleNotification).toHaveBeenCalledWith(typesNotification.ERROR, 'Login e/ou senha incorretos');
    });


    it('should redirect to home page when user status is not 'APROVADO_NODOC' or 'APROVADO'', () => {

      const user = {
        roles: ['ROLE_USER'],
        status: 'SOME_STATUS'
      }


      const credentials = {}


      const handleNavigate = jest.fn()


      jest.spyOn(redux, 'useAppSelector').mockReturnValueOnce({ user, credentials })


      jest.spyOn(hooks, 'useHandleNavigate').mockReturnValueOnce({ handleNavigate })


      useSignIn()


      expect(handleNavigate).toHaveBeenCalledWith(PathRoutes.HOME)
    });


    it('should redirect to home page when user has a role that is not 'ROLE_ADMIN' or 'ROLE_USER'', () => {

      jest.spyOn(redux, 'useAppSelector').mockReturnValue({
        authLoading: false,
        credentials: true,
        signError: false,
        user: {
          roles: ['ROLE_OTHER'],
          status: 'APROVADO'
        }
      })


      const mockHandleNavigate = jest.fn()
      jest.spyOn(hooks, 'useHandleNavigate').mockReturnValue({
        handleNavigate: mockHandleNavigate
      })


      const mockDispatch = jest.fn()
      jest.spyOn(redux, 'useAppDispatch').mockReturnValue(mockDispatch)


      const mockFormik = {
        values: {
          email: 'test@example.com',
          password: 'password123'
        }
      }
      jest.spyOn(formik, 'useFormik').mockReturnValue(mockFormik)


      useSignIn()


      expect(mockHandleNavigate).toHaveBeenCalledWith(PathRoutes.HOME)
    })


    it('should redirect to REGISTER path when user has "APROVADO_NODOC" status and MOCK is false', () => {

      jest.spyOn(redux, 'useAppSelector').mockReturnValue({
        authLoading: false,
        credentials: true,
        signError: false,
        user: {
          roles: ['ROLE_USER'],
          status: 'APROVADO_NODOC'
        }
      })


      const mockHandleNavigate = jest.fn()
      jest.spyOn(hooks, 'useHandleNavigate').mockReturnValue({
        handleNavigate: mockHandleNavigate
      })


      const mockDispatch = jest.fn()
      jest.spyOn(redux, 'useAppDispatch').mockReturnValue(mockDispatch)


      const mockFormik = {
        values: {
          email: 'test@example.com',
          password: 'password123'
        }
      }
      jest.spyOn(formik, 'useFormik').mockReturnValue(mockFormik)


      const { formik } = useSignIn()


      expect(mockHandleNavigate).toHaveBeenCalledWith(PathRoutes.REGISTER)


      expect(mockDispatch).not.toHaveBeenCalledWith(fetchAuth(formik.values))
    })


    it('should redirect to the correct path when user has "APROVADO" status but not "ROLE_USER"', () => {

      jest.spyOn(redux, 'useAppSelector').mockReturnValue({
        authLoading: false,
        credentials: true,
        signError: false,
        user: {
          roles: ['ROLE_ADMIN'],
          status: 'APROVADO',
        },
      })


      const mockHandleNavigate = jest.fn()
      jest.spyOn(hooks, 'useHandleNavigate').mockReturnValue({
        handleNavigate: mockHandleNavigate,
      })


      const mockDispatch = jest.fn()
      jest.spyOn(redux, 'useAppDispatch').mockReturnValue(mockDispatch)
      jest.spyOn(redux, 'fetchAuth').mockImplementation((payload) => {
        return async (dispatch) => {
          dispatch({ type: 'AUTH_LOADING' })
          dispatch({ type: 'AUTH_CREDENTIALS', payload })
        }
      })


      renderHook(() => useSignIn())


      expect(mockHandleNavigate).toHaveBeenCalledWith(PathRoutes.PARTNERS)
    })


});
