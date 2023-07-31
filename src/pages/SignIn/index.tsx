import Login_PNG from '@assets/images/login.png'
import ButtonGradient from '@components/UI/ButtonGradient'
import Field from '@components/UI/Field'
import FieldPassword from '@components/UI/FieldPassword'
import Icon from '@components/UI/Icon'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { theme } from '@resources/theme'
import * as S from './styles'
import useSignIn from './useSignIn'

const SignIn = () => {
  const { togglePasswordType, passwordType, showPassword, formik } = useSignIn()

  return (
    <S.Container>
      <S.ContainerImage>
        <S.WrapperLogo>
          <Icon name="logo-white" />
        </S.WrapperLogo>
        <S.WrapperImage>
          <img src={Login_PNG} alt="KONEKTE" />
        </S.WrapperImage>
        <S.WrapperText>
          <Typography
            align="center"
            size={24}
            weight="300"
            lineHeight="29px"
            color={theme.palette.text.dark}
          >
            Tecnologia que conecta sua empresa aos {''}
            <Typography
              align="center"
              size={24}
              weight="700"
              lineHeight="29px"
              color={theme.palette.text.dark}
            >
              melhores canais digitais.
            </Typography>
          </Typography>
        </S.WrapperText>
      </S.ContainerImage>
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
          />
          <Separator displayLine={true} horizontalSize={0} />
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
            />
            <S.WrapperIcon onClick={() => togglePasswordType()}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </S.WrapperIcon>
          </S.WrapperField>
          <Separator displayLine={true} horizontalSize={0} />
        </S.WrapperFields>
        <S.WrapperButton>
          <ButtonGradient
            onClick={formik.handleSubmit}
            width={504}
            height={59}
            borderRadius={100}
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
        <S.WrapperForgotPassword>
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
        <S.WrapperSignUp>
          <Typography
            align="center"
            size={18}
            weight="600"
            color={theme.palette.warning.lightest}
          >
            Crie um novo cadastro
          </Typography>
        </S.WrapperSignUp>
      </S.WrapperForm>
    </S.Container>
  )
}

export default SignIn
