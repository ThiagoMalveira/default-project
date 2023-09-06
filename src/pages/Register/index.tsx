import CardRegister from '@components/CardRegister'
import DataGridShipping from '@components/DataGridShipping'
import Dropzone from '@components/Dropzone'
import ImageLogin from '@components/ImageLogin'
import TermsText from '@components/ModalTerms/mock'
import ButtonGradient from '@components/UI/ButtonGradient'
import Field from '@components/UI/Field'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { Backdrop, Modal } from '@material-ui/core'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import CloseIcon from '@mui/icons-material/Close'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import { theme } from '@resources/theme'
import * as S from './styles'
import useRegister from './useRegister'

const Register = () => {
  const {
    statusBankAccount,
    statusShipping,
    statusContract,
    // Modal status
    modalContract,
    modalShipping,
    // modalBankAccount,
    // Handle close and complete
    handleCloseAndCompleteModalShipping,
    // handleCloseAndCompleteModalBankAccount,
    handleCloseAndCompleteModalContract,
    // Handle close only
    handleCloseModalContract,
    handleCloseModalShipping,
    // handleCloseModalBankAccount,
    // handle Open modals
    handleOpenModalBankAccount,
    handleOpenModalContract,
    handleOpenModalShipping,
    nextStepShipping,
    previousStepShipping,
    stepShipping,
    header,
    data,
    forms,
  } = useRegister()
  const step = '2'

  const ModalCreateManualTable = () => {
    return (
      <S.ContainerManualTable>
        <S.WrapperTitleModal>
          <Typography size={18} weight="600" color={theme.palette.text.dark}>
            Tabela de frete
          </Typography>
          <S.WrapperIcon onClick={previousStepShipping}>
            <CloseIcon sx={{ color: theme.palette.text.dark }} />
          </S.WrapperIcon>
        </S.WrapperTitleModal>
        <S.WrapperTable>
          <S.ContainerTable>
            <DataGridShipping header={header} data={data} />
            <S.WrapperButtonAdd onClick={nextStepShipping}>
              <Typography
                size={14}
                weight="600"
                color={theme.palette.warning.lightest}
              >
                + Adicionar uma nova linha
              </Typography>
            </S.WrapperButtonAdd>
            <S.WrapperButtonBack onClick={previousStepShipping}>
              <Typography
                size={14}
                weight="600"
                textDecoration="underline"
                color={theme.palette.warning.lightest}
              >
                Quero fazer upload de uma tabela
              </Typography>
            </S.WrapperButtonBack>
          </S.ContainerTable>
        </S.WrapperTable>
        <S.WrapperButtonShipping>
          <S.WrapperButtonCancelShipping onClick={previousStepShipping}>
            <Typography
              color={theme.palette.text.dark}
              weight="400"
              size={14}
              textDecoration="underline"
            >
              Cancelar
            </Typography>
          </S.WrapperButtonCancelShipping>
          <ButtonGradient
            height={59}
            width={265}
            onClick={handleCloseAndCompleteModalShipping}
          >
            <Typography
              size={18}
              weight="600"
              align="center"
              color={theme.palette.primary.lightest}
            >
              Salvar
            </Typography>
          </ButtonGradient>
        </S.WrapperButtonShipping>
      </S.ContainerManualTable>
    )
  }

  const ModalShipping = () => {
    return (
      <S.ContainerModalShipping>
        <S.WrapperTitleModal>
          <Typography size={18} weight="600" color={theme.palette.text.dark}>
            Tabela de frete
          </Typography>
          <S.WrapperIcon onClick={handleCloseModalShipping}>
            <CloseIcon sx={{ color: theme.palette.text.dark }} />
          </S.WrapperIcon>
        </S.WrapperTitleModal>
        <S.WrapperShippingCompany>
          <Typography size={14} weight="400" color={theme.palette.text.dark}>
            Nome da transportadora
          </Typography>
          <Typography size={16} weight="600" color={theme.palette.text.dark}>
            Correios
          </Typography>
        </S.WrapperShippingCompany>
        <S.WrapperTable>
          <Dropzone onFileUploaded={() => console.log('uploaded file')} />
          <S.WrapperManualTable onClick={nextStepShipping}>
            <Typography
              size={14}
              weight="600"
              align="center"
              color={'#AD8D31'}
              textDecoration="underline"
            >
              Quero criar uma tabela manual
            </Typography>
          </S.WrapperManualTable>
        </S.WrapperTable>
        <S.WrapperButtonShipping>
          <S.WrapperButtonCancelShipping onClick={handleCloseModalShipping}>
            <Typography
              color={theme.palette.text.dark}
              weight="400"
              size={14}
              textDecoration="underline"
            >
              Cancelar
            </Typography>
          </S.WrapperButtonCancelShipping>
          <ButtonGradient
            height={59}
            width={265}
            onClick={handleCloseAndCompleteModalShipping}
          >
            <Typography
              size={18}
              weight="600"
              align="center"
              color={theme.palette.primary.lightest}
            >
              Salvar
            </Typography>
          </ButtonGradient>
        </S.WrapperButtonShipping>
      </S.ContainerModalShipping>
    )
  }

  const ModalTerms = () => {
    return (
      <S.ContainerModalContract>
        <S.WrapperTitleModal>
          <Typography size={18} weight="600" color={theme.palette.text.dark}>
            Termos de parceria
          </Typography>
          <S.WrapperIcon onClick={handleCloseModalContract}>
            <CloseIcon sx={{ color: theme.palette.error.dark }} />
          </S.WrapperIcon>
        </S.WrapperTitleModal>

        <S.WrapperTermsText>
          <Typography
            size={16}
            weight="400"
            lineHeight="20.8px"
            color={theme.palette.secondary.dark}
          >
            {TermsText}
          </Typography>
        </S.WrapperTermsText>

        <S.WrapperButton>
          <ButtonGradient
            height={59}
            width={265}
            onClick={handleCloseAndCompleteModalContract}
          >
            <Typography
              size={18}
              weight="600"
              align="center"
              color={theme.palette.primary.lightest}
            >
              Li e estou de acordo
            </Typography>
          </ButtonGradient>
        </S.WrapperButton>
      </S.ContainerModalContract>
    )
  }

  const ModalAddLine = () => {
    return (
      <S.ContainerModalAddLine>
        <S.WrapperTitleModal>
          <Typography size={18} weight="600" color={theme.palette.text.dark}>
            Adicionar Linha
          </Typography>
          <S.WrapperIcon onClick={previousStepShipping}>
            <CloseIcon sx={{ color: theme.palette.error.dark }} />
          </S.WrapperIcon>
        </S.WrapperTitleModal>
        <S.WrapperFormLine>
          <S.WrapperFields>
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={100}
              labelTop="UF"
              labelColor={theme.palette.text.dark}
              placeholder={'UF do estado'}
              name={'uf'}
              onChange={forms.handleChange}
              value={forms.values.uf}
              errorMessage={forms.errors.uf}
            />

            <Separator horizontalSize={20} />

            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={100}
              labelTop="PESO (KG)"
              labelColor={theme.palette.text.dark}
              placeholder={'Peso em kilos'}
              name={'peso'}
              onChange={forms.handleChange}
              value={forms.values.peso}
              errorMessage={forms.errors.peso}
            />

            <Separator horizontalSize={20} />

            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={100}
              labelTop="COMPRIMENTO"
              labelColor={theme.palette.text.dark}
              placeholder={'Em centímetros'}
              name={'comprimento'}
              onChange={forms.handleChange}
              value={forms.values.comprimento}
              errorMessage={forms.errors.comprimento}
            />
          </S.WrapperFields>
          <Separator verticalSize={20} />
          <S.WrapperFields>
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={100}
              labelTop="ALTURA (CM)"
              labelColor={theme.palette.text.dark}
              placeholder={'Em centímetros'}
              name={'altura'}
              onChange={forms.handleChange}
              value={forms.values.altura}
              errorMessage={forms.errors.altura}
            />

            <Separator horizontalSize={20} />

            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={100}
              labelTop="LARGURA (CM)"
              labelColor={theme.palette.text.dark}
              placeholder={'Em centímetros'}
              name={'largura'}
              onChange={forms.handleChange}
              value={forms.values.largura}
              errorMessage={forms.errors.largura}
            />

            <Separator horizontalSize={20} />

            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={100}
              labelTop="PRAZO MIN"
              labelColor={theme.palette.text.dark}
              placeholder={'Prazo mínimo'}
              name={'prazo_min'}
              onChange={forms.handleChange}
              value={forms.values.prazo_min}
              errorMessage={forms.errors.prazo_min}
            />
          </S.WrapperFields>
          <Separator verticalSize={20} />
          <S.WrapperFields>
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={100}
              labelTop="PRAZO MAX"
              labelColor={theme.palette.text.dark}
              placeholder={'Prazo máximo'}
              name={'prazo_max'}
              onChange={forms.handleChange}
              value={forms.values.prazo_max}
              errorMessage={forms.errors.prazo_max}
            />

            <Separator horizontalSize={20} />

            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={100}
              labelTop="VALOR FRETE"
              labelColor={theme.palette.text.dark}
              placeholder={'Valor frete'}
              name={'shipping_value'}
              onChange={forms.handleChange}
              value={forms.values.shipping_value}
              errorMessage={forms.errors.shipping_value}
            />

            <Separator horizontalSize={20} />

            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={100}
              labelTop="FAIXA GRÁTIS"
              labelColor={theme.palette.text.dark}
              placeholder={'Frete grátis'}
              name={'free_shipping'}
              onChange={forms.handleChange}
              value={forms.values.free_shipping}
              errorMessage={forms.errors.free_shipping}
            />
          </S.WrapperFields>
        </S.WrapperFormLine>
        <S.WrapperButtonShipping>
          <S.WrapperButtonCancelShipping onClick={previousStepShipping}>
            <Typography
              color={theme.palette.text.dark}
              weight="400"
              size={14}
              textDecoration="underline"
            >
              Cancelar
            </Typography>
          </S.WrapperButtonCancelShipping>
          <ButtonGradient height={59} width={265} onClick={forms.handleSubmit}>
            <Typography
              size={18}
              weight="600"
              align="center"
              color={theme.palette.primary.lightest}
            >
              Salvar
            </Typography>
          </ButtonGradient>
        </S.WrapperButtonShipping>
      </S.ContainerModalAddLine>
    )
  }

  const ShippingSetups = {
    1: <ModalShipping />,
    2: <ModalCreateManualTable />,
    3: <ModalAddLine />,
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
            openModal={handleOpenModalContract}
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
            openModal={handleOpenModalShipping}
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
            openModal={handleOpenModalBankAccount}
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
      <Modal
        onClose={handleCloseModalShipping}
        open={modalShipping}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {ShippingSetups[stepShipping]}
      </Modal>
    </S.Container>
  )
}

export default Register
