import ImageLogin from '@components/ImageLogin'
import ButtonGradient from '@components/UI/ButtonGradient'
import Field from '@components/UI/Field'
import FieldPassword from '@components/UI/FieldPassword'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { useGoBack } from '@hooks/useGoBack'
import { useHandleNavigate } from '@hooks/useHandleNavigate'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { theme } from '@resources/theme'
import PathRoutes from '@route/PathRoutes'
import * as S from './styles'
import useSignIn from './useSignIn'

const SignIn = () => {
  const { togglePasswordType, passwordType, showPassword, formik } = useSignIn()

  const { handleNavigate } = useHandleNavigate()
  const { handleGoBack } = useGoBack()

  return (
    <S.Container>
      <ImageLogin />
      <S.WrapperForm>
        <S.WrapperTitle>
          <Typography
            align="center"
            size={28}
            weight="700"
            color={theme.palette.text.dark}
          >
            Entre com suas credenciais
          </Typography>
        </S.WrapperTitle>
        <Separator verticalSize={20} />
        <S.WrapperFields>
          <Field
            marginInputLeft={20}
            marginInputRight={20}
            inputWidth={504}
            labelTop="E-mail"
            labelColor={theme.palette.text.dark}
            placeholder={'E-mail de acesso'}
            name="email"
            {...formik.getFieldProps('email')}
            errorMessage={formik.errors.email}
          />

          <Separator verticalSize={20} />

          <S.WrapperField>
            <FieldPassword
              type={passwordType}
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={504}
              labelTop="Senha"
              labelColor={theme.palette.text.dark}
              placeholder={'Senha de acesso'}
              name="password"
              {...formik.getFieldProps('password')}
              errorMessage={formik.errors.password}
            />
            <S.WrapperIcon onClick={() => togglePasswordType()}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </S.WrapperIcon>
          </S.WrapperField>
        </S.WrapperFields>
        <S.WrapperButton>
          <ButtonGradient
            onClick={formik.handleSubmit}
            width={504}
            height={59}
            borderRadius={100}
            type="button"
          >
            <Typography
              size={18}
              align="center"
              weight="600"
              color={theme.palette.text.lightest}
            >
              Entrar
            </Typography>
          </ButtonGradient>
        </S.WrapperButton>
        <S.WrapperForgotPassword
          onClick={() => handleNavigate(PathRoutes.FORGOT_PASSWORD)}
        >
          <Typography
            align="center"
            size={16}
            weight="400"
            color={theme.palette.secondary.dark}
          >
            Esqueci a senha
          </Typography>
        </S.WrapperForgotPassword>
        <Separator verticalSize={80} />
        <S.WrapperSignUp onClick={() => handleNavigate(PathRoutes.SIGN_UP)}>
          <Typography
            align="center"
            size={18}
            weight="600"
            color={theme.palette.warning.lightest}
          >
            Crie um novo cadastro
          </Typography>
        </S.WrapperSignUp>

        <Separator verticalSize={40} />

        <S.WrapperGoBack onClick={handleGoBack}>
          <Typography
            align="center"
            size={16}
            weight="400"
            color={theme.palette.secondary.dark}
          >
            Voltar
          </Typography>
        </S.WrapperGoBack>
      </S.WrapperForm>
    </S.Container>
  )
}

export default SignIn
