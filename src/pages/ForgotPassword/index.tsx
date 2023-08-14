import ImageLogin from '@components/ImageLogin'
import ButtonGradient from '@components/UI/ButtonGradient'
import Field from '@components/UI/Field'
import Typography from '@components/UI/Typography'
import { useGoBack } from '@hooks/useGoBack'
import { theme } from '@resources/theme'
import * as S from './styles'
import useForgotPassword from './useForgotPassword'

const ForgotPassword = () => {
  const { handleGoBack } = useGoBack()
  const { handleForgotPassword } = useForgotPassword()

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
            Recupere sua senha aqui
          </Typography>
        </S.WrapperTitle>

        <S.WrapperField>
          <Field
            marginInputLeft={20}
            marginInputRight={20}
            inputWidth={504}
            labelTop="E-mail"
            labelColor={theme.palette.text.dark}
            placeholder={'E-mail de acesso'}
            name="email"
          />
        </S.WrapperField>

        <S.WrapperButton>
          <ButtonGradient
            onClick={handleForgotPassword}
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
              Enviar
            </Typography>
          </ButtonGradient>
        </S.WrapperButton>

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

export default ForgotPassword
