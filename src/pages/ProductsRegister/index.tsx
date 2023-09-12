import CardRegister from '@components/CardRegister'
import ImageLogin from '@components/ImageLogin'
import AddPhoto from '@components/UI/AddPhoto'
import ButtonGradient from '@components/UI/ButtonGradient'
import Field from '@components/UI/Field'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { Backdrop, Modal } from '@material-ui/core'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import CloseIcon from '@mui/icons-material/Close'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined'
import RuleIcon from '@mui/icons-material/Rule'
import { theme } from '@resources/theme'
import * as S from './styles'
import useProductsRegister from './useProductsRegister'

const ProductsRegister = () => {
  const {
    statusProducts,
    handleOpenModalProducts,
    modalProducts,
    handleCloseModalProducts,
    nextStepShipping,
    previousStepShipping,
    stepProduct,
    handleAddProduct,
    handleCompleteProducts,
  } = useProductsRegister()
  const step = '3'

  const ModalProductsStepOne = () => {
    return (
      <S.ContainerProducts>
        <S.WrapperTitleModal>
          <Typography size={18} weight="600" color={theme.palette.text.dark}>
            Cadastro de produto
          </Typography>
          <S.WrapperIcon onClick={previousStepShipping}>
            <CloseIcon sx={{ color: theme.palette.text.dark }} />
          </S.WrapperIcon>
        </S.WrapperTitleModal>
        <S.WrapperIconsByStep>
          <S.WrapperIconWithText>
            <S.WrapperIconStep isActive={stepProduct >= 1}>
              <FormatListBulletedOutlinedIcon />
            </S.WrapperIconStep>
            <Typography
              size={16}
              weight="700"
              align="center"
              color={
                stepProduct === 1
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Dados básicos
            </Typography>
          </S.WrapperIconWithText>
          <S.StepLine isActive={stepProduct >= 2} />
          <S.WrapperIconWithText>
            <S.WrapperIconStep isActive={stepProduct >= 2}>
              <RuleIcon />
            </S.WrapperIconStep>
            <Typography
              size={16}
              weight="700"
              align="center"
              color={
                stepProduct === 2
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Características
            </Typography>
          </S.WrapperIconWithText>
          <S.StepLine isActive={stepProduct >= 3} />
          <S.WrapperIconWithText>
            <S.WrapperIconStep isActive={stepProduct >= 3}>
              <AttachMoneyIcon />
            </S.WrapperIconStep>
            <Typography
              size={16}
              weight="700"
              align="center"
              color={
                stepProduct === 3
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Comissões e outros
            </Typography>
          </S.WrapperIconWithText>
        </S.WrapperIconsByStep>

        <S.ContainerForm>
          <S.WrapperTitleForm>
            <Typography
              align="center"
              size={18}
              weight="700"
              color={theme.palette.text.dark}
            >
              Dados básicos do produto
            </Typography>
          </S.WrapperTitleForm>
          <S.WrapperFields>
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={976}
              labelTop="Nome do produto"
              borderColor={'#E9E9E9'}
              labelColor={theme.palette.text.dark}
              placeholder={'Nome do produto'}
              name={'productName'}
            />
          </S.WrapperFields>
          <Separator verticalSize={10} />
          <S.WrapperFields>
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Categoria"
              labelColor={theme.palette.text.dark}
              placeholder={'Selecione'}
              name={'productCategory'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Tipo de produto"
              labelColor={theme.palette.text.dark}
              placeholder={'Selecione'}
              name={'productType'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="SKU"
              labelColor={theme.palette.text.dark}
              placeholder={'SKU'}
              name={'productSKU'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Código do produto"
              labelColor={theme.palette.text.dark}
              placeholder={'Código'}
              name={'productCode'}
            />
          </S.WrapperFields>
          <Separator verticalSize={10} />
          <S.WrapperFields>
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Valor padrão"
              labelColor={theme.palette.text.dark}
              placeholder={'R$'}
              name={'productValue'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Valor com desconto"
              labelColor={theme.palette.text.dark}
              placeholder={'R$'}
              name={'productValueWithDiscount'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Fabricante"
              labelColor={theme.palette.text.dark}
              placeholder={'Fabricante'}
              name={'productManufacturer'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="SAC Fabricante"
              labelColor={theme.palette.text.dark}
              placeholder={'DDD + Número'}
              name={'productSAC'}
            />
          </S.WrapperFields>
          <Separator verticalSize={10} />
          <S.WrapperFields>
            <Field
              maxLength={400}
              marginInputLeft={20}
              marginInputRight={20}
              borderColor={'#E9E9E9'}
              inputWidth={980}
              inputHeight={98}
              labelTop="Descrição"
              labelColor={theme.palette.text.dark}
              placeholder={'Até 400 caracteres'}
              name={'productDescription'}
            />
          </S.WrapperFields>
        </S.ContainerForm>

        <S.WrapperButtonProducts>
          <S.WrapperButtonCancelProducts onClick={handleCloseModalProducts}>
            <Typography
              color={theme.palette.text.dark}
              weight="400"
              size={14}
              textDecoration="underline"
            >
              Cancelar
            </Typography>
          </S.WrapperButtonCancelProducts>
          <ButtonGradient height={59} width={265} onClick={nextStepShipping}>
            <Typography
              size={18}
              weight="600"
              align="center"
              color={theme.palette.primary.lightest}
            >
              Avançar
            </Typography>
          </ButtonGradient>
        </S.WrapperButtonProducts>
      </S.ContainerProducts>
    )
  }

  const ModalProductsStepTwo = () => {
    return (
      <S.ContainerProducts>
        <S.WrapperTitleModal>
          <Typography size={18} weight="600" color={theme.palette.text.dark}>
            Cadastro de produto
          </Typography>
          <S.WrapperIcon onClick={previousStepShipping}>
            <CloseIcon sx={{ color: theme.palette.text.dark }} />
          </S.WrapperIcon>
        </S.WrapperTitleModal>
        <S.WrapperIconsByStep>
          <S.WrapperIconWithText>
            <S.WrapperIconStep isActive={stepProduct >= 1}>
              <FormatListBulletedOutlinedIcon />
            </S.WrapperIconStep>
            <Typography
              size={16}
              weight="700"
              align="center"
              color={
                stepProduct === 1
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Dados básicos
            </Typography>
          </S.WrapperIconWithText>
          <S.StepLine isActive={stepProduct >= 2} />
          <S.WrapperIconWithText>
            <S.WrapperIconStep isActive={stepProduct >= 2}>
              <RuleIcon />
            </S.WrapperIconStep>
            <Typography
              size={16}
              weight="700"
              align="center"
              color={
                stepProduct === 2
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Características
            </Typography>
          </S.WrapperIconWithText>
          <S.StepLine isActive={stepProduct >= 3} />
          <S.WrapperIconWithText>
            <S.WrapperIconStep isActive={stepProduct >= 3}>
              <AttachMoneyIcon />
            </S.WrapperIconStep>
            <Typography
              size={16}
              weight="700"
              align="center"
              color={
                stepProduct === 3
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Comissões e outros
            </Typography>
          </S.WrapperIconWithText>
        </S.WrapperIconsByStep>

        <S.ContainerForm>
          <S.WrapperTitleForm>
            <Typography
              align="center"
              size={18}
              weight="700"
              color={theme.palette.text.dark}
            >
              Dimensões e peso do produto
            </Typography>
          </S.WrapperTitleForm>

          <S.WrapperFields>
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Altura"
              labelColor={theme.palette.text.dark}
              placeholder={'Altura'}
              name={'productHeight'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Largura"
              labelColor={theme.palette.text.dark}
              placeholder={'Largura'}
              name={'productWidth'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Profundidade"
              labelColor={theme.palette.text.dark}
              placeholder={'Profundidade'}
              name={'productDepth'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Peso"
              labelColor={theme.palette.text.dark}
              placeholder={'Peso'}
              name={'productWeight'}
            />
          </S.WrapperFields>

          <S.WrapperTitleForm>
            <Typography
              align="center"
              size={18}
              weight="700"
              color={theme.palette.text.dark}
            >
              Outras informações
            </Typography>
          </S.WrapperTitleForm>

          <S.WrapperFields>
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Validade"
              labelColor={theme.palette.text.dark}
              placeholder={'30 dias'}
              name={'productValidity'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Marca"
              labelColor={theme.palette.text.dark}
              placeholder={'Marca'}
              name={'productBrand'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Estoque inicial"
              labelColor={theme.palette.text.dark}
              placeholder={'100'}
              name={'productStock'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Status"
              labelColor={theme.palette.text.dark}
              placeholder={'Ativo'}
              name={'productStatus'}
            />
          </S.WrapperFields>

          <S.WrapperTitleForm>
            <Typography
              align="center"
              size={18}
              weight="700"
              color={theme.palette.text.dark}
            >
              Fotos do produto
            </Typography>
          </S.WrapperTitleForm>
          <S.WrapperDescription>
            <Typography align="center" size={14} weight="400" color={'#9B9B9B'}>
              Tamanho mínimo 800x800px
            </Typography>
          </S.WrapperDescription>

          <S.WrapperPhotos>
            <AddPhoto />
            <AddPhoto />
            <AddPhoto />
            <AddPhoto />
            <AddPhoto />
          </S.WrapperPhotos>
        </S.ContainerForm>
        <S.WrapperButtonProducts>
          <S.WrapperButtonCancelProducts onClick={previousStepShipping}>
            <Typography
              color={theme.palette.text.dark}
              weight="400"
              size={14}
              textDecoration="underline"
            >
              Cancelar
            </Typography>
          </S.WrapperButtonCancelProducts>
          <ButtonGradient height={59} width={265} onClick={nextStepShipping}>
            <Typography
              size={18}
              weight="600"
              align="center"
              color={theme.palette.primary.lightest}
            >
              Avançar
            </Typography>
          </ButtonGradient>
        </S.WrapperButtonProducts>
      </S.ContainerProducts>
    )
  }

  const ModalProductsStepThree = () => {
    return (
      <S.ContainerProducts>
        <S.WrapperTitleModal>
          <Typography size={18} weight="600" color={theme.palette.text.dark}>
            Cadastro de produto
          </Typography>
          <S.WrapperIcon onClick={previousStepShipping}>
            <CloseIcon sx={{ color: theme.palette.text.dark }} />
          </S.WrapperIcon>
        </S.WrapperTitleModal>
        <S.WrapperIconsByStep>
          <S.WrapperIconWithText>
            <S.WrapperIconStep isActive={stepProduct >= 1}>
              <FormatListBulletedOutlinedIcon />
            </S.WrapperIconStep>
            <Typography
              size={16}
              weight="700"
              align="center"
              color={
                stepProduct === 1
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Dados básicos
            </Typography>
          </S.WrapperIconWithText>
          <S.StepLine isActive={stepProduct >= 2} />
          <S.WrapperIconWithText>
            <S.WrapperIconStep isActive={stepProduct >= 2}>
              <RuleIcon />
            </S.WrapperIconStep>
            <Typography
              size={16}
              weight="700"
              align="center"
              color={
                stepProduct === 2
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Características
            </Typography>
          </S.WrapperIconWithText>
          <S.StepLine isActive={stepProduct >= 3} />
          <S.WrapperIconWithText>
            <S.WrapperIconStep isActive={stepProduct >= 3}>
              <AttachMoneyIcon />
            </S.WrapperIconStep>
            <Typography
              size={16}
              weight="700"
              align="center"
              color={
                stepProduct === 3
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Comissões e outros
            </Typography>
          </S.WrapperIconWithText>
        </S.WrapperIconsByStep>

        <S.ContainerForm>
          <S.WrapperTitleForm>
            <Typography
              align="center"
              size={18}
              weight="700"
              color={theme.palette.text.dark}
            >
              Comissões e Descontos
            </Typography>
          </S.WrapperTitleForm>
          <S.WrapperFieldsCommission>
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Comissões e vendas"
              labelColor={theme.palette.text.dark}
              placeholder={'%'}
              name={'productCommission'}
            />
            <Separator horizontalSize={20} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={200}
              borderColor={'#E9E9E9'}
              labelTop="Desconto comercial"
              labelColor={theme.palette.text.dark}
              placeholder={'%'}
              name={'productDiscount'}
            />
          </S.WrapperFieldsCommission>

          <S.WrapperTitleForm>
            <Typography
              align="center"
              size={18}
              weight="700"
              color={theme.palette.text.dark}
            >
              Dados adicionais
            </Typography>
          </S.WrapperTitleForm>
          <S.WrapperDescriptionForm>
            <Typography align="center" size={14} weight="400" color={'#9B9B9B'}>
              Sem dados adicionais
            </Typography>
          </S.WrapperDescriptionForm>
        </S.ContainerForm>
        <S.WrapperButtonProducts>
          <S.WrapperButtonCancelProducts onClick={previousStepShipping}>
            <Typography
              color={theme.palette.text.dark}
              weight="400"
              size={14}
              textDecoration="underline"
            >
              Cancelar
            </Typography>
          </S.WrapperButtonCancelProducts>
          <ButtonGradient height={59} width={265} onClick={nextStepShipping}>
            <Typography
              size={18}
              weight="600"
              align="center"
              color={theme.palette.primary.lightest}
            >
              Concluir
            </Typography>
          </ButtonGradient>
        </S.WrapperButtonProducts>
      </S.ContainerProducts>
    )
  }

  const ModalProductsStepFour = () => {
    return (
      <S.ContainerProductsFour>
        <S.WrapperTitleModalFour>
          <S.WrapperIcon onClick={previousStepShipping}>
            <CloseIcon sx={{ color: theme.palette.text.dark }} />
          </S.WrapperIcon>
        </S.WrapperTitleModalFour>
        <S.WrapperTitleWithIconFour>
          <CheckCircleOutlineOutlinedIcon
            sx={{ color: '#4BBA4F', fontSize: 61 }}
          />
          <S.WrapperTitleFour>
            <Typography
              align="center"
              size={24}
              weight="600"
              color={theme.palette.text.dark}
            >
              Produto cadastrado com sucesso!
            </Typography>
          </S.WrapperTitleFour>
          <S.WrapperDescriptionFour>
            <Typography
              align="center"
              size={16}
              weight="400"
              color={theme.palette.text.dark}
            >
              Deseja cadastrar mais itens ou concluir?
            </Typography>
          </S.WrapperDescriptionFour>
        </S.WrapperTitleWithIconFour>
        <S.WrapperButtonProducts>
          <S.WrapperButtonCancelProducts onClick={handleCompleteProducts}>
            <Typography color={'#4BBA4F'} weight="600" size={16}>
              Concluir
            </Typography>
          </S.WrapperButtonCancelProducts>
          <ButtonGradient height={59} width={265} onClick={handleAddProduct}>
            <Typography
              size={18}
              weight="600"
              align="center"
              color={theme.palette.primary.lightest}
            >
              + Cadastrar outro
            </Typography>
          </ButtonGradient>
        </S.WrapperButtonProducts>
      </S.ContainerProductsFour>
    )
  }

  const ProductSetup = {
    1: <ModalProductsStepOne />,
    2: <ModalProductsStepTwo />,
    3: <ModalProductsStepThree />,
    4: <ModalProductsStepFour />,
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
        <S.WrapperTitleWithIcon>
          <NoteAddOutlinedIcon sx={{ color: '#CAB780', fontSize: 66 }} />
          <S.WrapperTitle>
            <Typography
              align="center"
              size={28}
              weight="700"
              color={theme.palette.text.dark}
            >
              Você pode cadastrar até 5 produtos
            </Typography>
          </S.WrapperTitle>
          <S.WrapperDescription>
            <Typography
              align="center"
              size={16}
              weight="400"
              color={theme.palette.text.dark}
            >
              Para a primeira fase da parceria, liberamos 5 produtos para você
              cadastrar. Clique em “Cadastrar produto” e inicie.
            </Typography>
          </S.WrapperDescription>
        </S.WrapperTitleWithIcon>
        <S.WrapperCard>
          <CardRegister
            title={'Cadastro de produtos'}
            description={'Cadastre pelo menos 1 produto para começar a vender.'}
            status={statusProducts}
            buttonName={'Cadastrar produto'}
            IconTitle={NoteAddOutlinedIcon}
            openModal={handleOpenModalProducts}
          />
        </S.WrapperCard>
      </S.WrapperForm>
      <Modal
        onClose={handleCloseModalProducts}
        open={modalProducts}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {ProductSetup[stepProduct]}
      </Modal>
    </S.Container>
  )
}

export default ProductsRegister
