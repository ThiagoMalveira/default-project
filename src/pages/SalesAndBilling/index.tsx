/* eslint-disable react/no-unescaped-entities */
import Dashboard from '@assets/images/dashboard.png'
import Pedidos from '@assets/images/pedidos.png'
import ImageLogin from '@components/ImageLogin'
import ButtonGradient from '@components/UI/ButtonGradient'
import Typography from '@components/UI/Typography'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import ChecklistIcon from '@mui/icons-material/Checklist'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import { theme } from '@resources/theme'
import * as S from './styles'
import useSalesAndBilling from './useSalesAndBilling'

const SalesAndBilling = () => {
  const { stepBilling, handleNextStep, handleNavigateToDashboard } =
    useSalesAndBilling()
  const step = '4'

  const StepOne = () => {
    return (
      <>
        <S.WrapperCenter>
          <S.WrapperTitleWithIcon>
            <ChecklistIcon sx={{ color: '#CAB780', fontSize: 58 }} />
            <S.WrapperTitle>
              <Typography
                align="center"
                size={28}
                weight="700"
                color={theme.palette.text.dark}
              >
                Acompanhe suas vendas
              </Typography>
            </S.WrapperTitle>
            <S.WrapperDescription>
              <Typography
                align="center"
                size={16}
                weight="400"
                color={theme.palette.secondary.dark}
              >
                Os pedidos feitos com seus produtos estarão na aba “Pedidos”,
                com acesso através do menu do painel.
              </Typography>
            </S.WrapperDescription>
          </S.WrapperTitleWithIcon>

          <S.WrapperImage>
            <S.Image src={Pedidos}></S.Image>
          </S.WrapperImage>
        </S.WrapperCenter>
        <S.WrapperButton>
          <ButtonGradient height={42} width={513} onClick={handleNextStep}>
            <Typography
              size={18}
              weight="600"
              align="center"
              color={theme.palette.primary.lightest}
            >
              Avançar
            </Typography>
          </ButtonGradient>
        </S.WrapperButton>
      </>
    )
  }

  const StepTwo = () => {
    return (
      <>
        <S.WrapperCenter>
          <S.WrapperTitleWithIcon>
            <SignalCellularAltIcon sx={{ color: '#CAB780', fontSize: 58 }} />
            <S.WrapperTitle>
              <Typography
                align="center"
                size={24}
                weight="700"
                color={theme.palette.text.dark}
              >
                Gerencie seu faturamento
              </Typography>
            </S.WrapperTitle>
            <S.WrapperDescription>
              <Typography
                align="center"
                size={16}
                weight="400"
                color={theme.palette.secondary.dark}
              >
                Você poderá acompanhar as vendas e seu faturamento através das
                abas “Dashboard", "Pedidos” ou "Financeiro".
              </Typography>
            </S.WrapperDescription>
          </S.WrapperTitleWithIcon>
          <S.WrapperImage>
            <S.Image src={Dashboard}></S.Image>
          </S.WrapperImage>
        </S.WrapperCenter>
        <S.WrapperButton>
          <ButtonGradient
            height={42}
            width={513}
            onClick={handleNavigateToDashboard}
          >
            <Typography
              size={18}
              weight="600"
              align="center"
              color={theme.palette.primary.lightest}
            >
              Concluir
            </Typography>
          </ButtonGradient>
        </S.WrapperButton>
      </>
    )
  }

  const formSetup = {
    1: <StepOne />,
    2: <StepTwo />,
  }

  return (
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
              PASSO {step}
            </Typography>
          </S.WrapperStep>
          <S.WrapperIcons>
            <Brightness1Icon sx={{ color: '#4BBA4F' }} />

            <S.StepLineIcons isActive={step > '1'} />
            <Brightness1Icon
              sx={step > '1' ? { color: '#4BBA4F' } : { color: '#C1C1C1' }}
            />

            <S.StepLineIcons isActive={step > '2'} />
            <Brightness1Icon
              sx={step > '2' ? { color: '#4BBA4F' } : { color: '#C1C1C1' }}
            />

            <S.StepLineIcons isActive={step > '3'} />
            <Brightness1Icon
              sx={step > '3' ? { color: '#4BBA4F' } : { color: '#C1C1C1' }}
            />
          </S.WrapperIcons>
        </S.WrapperTop>
        {formSetup[stepBilling]}
      </S.WrapperForm>
    </S.Container>
  )
}

export default SalesAndBilling
