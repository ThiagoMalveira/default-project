import HeaderPartner from '@components/HeaderPartner'
import Sidebar from '@components/Sidebar'
import AddPhoto from '@components/UI/AddPhoto'
import ButtonGradient from '@components/UI/ButtonGradient'
import Field from '@components/UI/Field'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { useGoBack } from '@hooks/useGoBack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import RuleIcon from '@mui/icons-material/Rule'
import { theme } from '@resources/theme'
import { Helmet } from 'react-helmet'
import * as S from './styles'
import usePanelRegisterProducts from './usePanelRegisterProducts'

const PanelRegisterProducts = () => {
  const { stepProduct, nextStepShipping, previousStepShipping } =
    usePanelRegisterProducts()
  const { handleGoBack } = useGoBack()

  const ModalProductsStepOne = () => {
    return (
      <S.ContainerProducts>
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
          <S.WrapperButtonCancelProducts onClick={handleGoBack}>
            <Typography
              color={theme.palette.text.dark}
              weight="400"
              size={14}
              textDecoration="underline"
            >
              Voltar
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
              Voltar
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
              Voltar
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
  const ProductSetup = {
    1: <ModalProductsStepOne />,
    2: <ModalProductsStepTwo />,
    3: <ModalProductsStepThree />,
  }

  return (
    <S.Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Registrar produtos | Konekte</title>
      </Helmet>
      <Sidebar />
      <S.WrapperHeader>
        <HeaderPartner />
      </S.WrapperHeader>
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
      <S.WrapperForm>{ProductSetup[stepProduct]}</S.WrapperForm>
    </S.Container>
  )
}

export default PanelRegisterProducts
