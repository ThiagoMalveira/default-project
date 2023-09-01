import CardRegister from '@components/CardRegister'
import ImageLogin from '@components/ImageLogin'
import ModalTerms from '@components/ModalTerms'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { Backdrop, Modal } from '@material-ui/core'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import { theme } from '@resources/theme'
import * as S from './styles'
import useRegister from './useRegister'

const Register = () => {
  const {
    statusBankAccount,
    statusContract,
    statusShipping,
    modalContract,
    handleCloseModalContract,
    handleOpenAndFinishContract,
    handleOpenAndFinishBankAccount,
    handleOpenAndFinishShipping,
  } = useRegister()
  const step = '2'

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
        <S.WrapperTitleWithIcon>
          <CheckCircleOutlineOutlinedIcon
            sx={{ color: '#4BBA4F', fontSize: 58 }}
          />
          <S.WrapperTitle>
            <Typography
              align="center"
              size={28}
              weight="700"
              color={theme.palette.text.dark}
            >
              Parabéns, seu cadastro foi aprovado!
            </Typography>
          </S.WrapperTitle>
          <S.WrapperDescription>
            <Typography
              align="center"
              size={16}
              weight="400"
              color={theme.palette.text.dark}
            >
              Cumpra as etapas abaixo para avançar para o passo 3.
            </Typography>
          </S.WrapperDescription>
        </S.WrapperTitleWithIcon>
        <S.WrapperCards>
          <CardRegister
            title={'Assinatura de contrato'}
            description={'Leia e assine o contrato clicando no botão abaixo.'}
            status={statusContract}
            buttonName={'Assinar contrato'}
            IconTitle={ModeEditOutlineOutlinedIcon}
            openModal={handleOpenAndFinishContract}
          />
          <Separator verticalSize={10} />
          <CardRegister
            title={'Cadastro de tabela de frete'}
            description={
              'Envie uma tabela de frete ou crie uma tabela manualmente.'
            }
            status={statusShipping}
            buttonName={'Cadastrar tabela'}
            IconTitle={LocalShippingOutlinedIcon}
            openModal={handleOpenAndFinishShipping}
          />
          <Separator verticalSize={10} />
          <CardRegister
            title={'Cadastro de conta bancária'}
            description={
              'Insira os dados da conta bancária em que deseja receber. '
            }
            status={statusBankAccount}
            buttonName={'Cadastrar conta'}
            IconTitle={AccountBalanceWalletOutlinedIcon}
            openModal={handleOpenAndFinishBankAccount}
          />
        </S.WrapperCards>
      </S.WrapperForm>
      <Modal
        onClose={handleCloseModalContract}
        open={modalContract}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ModalTerms />
      </Modal>
    </S.Container>
  )
}

export default Register
