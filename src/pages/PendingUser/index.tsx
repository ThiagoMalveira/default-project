import BackButton from '@components/BackButton'
import ImageLogin from '@components/ImageLogin'
import Typography from '@components/UI/Typography'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import { theme } from '@resources/theme'
import * as S from './styles'

const PendingUser = () => {
  const step = '2'
  return (
    <>
      <S.Container>
        <ImageLogin />
        <S.WrapperForm>
          <S.WrapperTop>
            <S.WrapperStep>
              <Typography
                align="center"
                size={16}
                weight="400"
                color={theme.palette.warning.lightest}
              >
                PASSO 2
              </Typography>
            </S.WrapperStep>
            <S.WrapperIcons>
              <Brightness1Icon sx={{ color: '#4BBA4F' }} />
              {step > '1' ? (
                <Brightness1Icon sx={{ color: '#4BBA4F' }} />
              ) : (
                <Brightness1Icon sx={{ color: '#C1C1C1' }} />
              )}
              {step > '2' ? (
                <Brightness1Icon sx={{ color: '#4BBA4F' }} />
              ) : (
                <Brightness1Icon sx={{ color: '#C1C1C1' }} />
              )}
              {step > '3' ? (
                <Brightness1Icon sx={{ color: '#4BBA4F' }} />
              ) : (
                <Brightness1Icon sx={{ color: '#C1C1C1' }} />
              )}
            </S.WrapperIcons>
          </S.WrapperTop>
          <S.WrapperAnalysis>
            <AccessTimeIcon sx={{ color: '#F39526', fontSize: 71 }} />
            <S.WrapperTitle>
              <Typography
                align="center"
                size={28}
                weight="700"
                color={theme.palette.text.dark}
              >
                Cadastro em análise
              </Typography>
            </S.WrapperTitle>
            <S.WrapperDescription>
              <Typography
                align="center"
                size={16}
                weight="400"
                color={theme.palette.text.dark}
              >
                Seus dados foram recebidos com sucesso! Nossa equipe validará os
                dados e retornaremos por e-mail com os próximos passos.
              </Typography>
            </S.WrapperDescription>
            <BackButton title={'Voltar'} useLogout />
          </S.WrapperAnalysis>
        </S.WrapperForm>
      </S.Container>
    </>
  )
}

export default PendingUser
