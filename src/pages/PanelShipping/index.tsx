import CardShipping from '@components/CardShipping'
import DataGridShipping from '@components/DataGridShipping'
import Dropzone from '@components/Dropzone'
import HeaderPartner from '@components/HeaderPartner'
import Sidebar from '@components/Sidebar'
import ButtonGradient from '@components/UI/ButtonGradient'
import Field from '@components/UI/Field'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { Backdrop, Modal } from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close'
import { theme } from '@resources/theme'
import { generateKey } from '@resources/utils/generateKey'
import * as S from './styles'
import usePanelShipping from './usePanelShipping'

const PanelShipping = () => {
  const {
    filter,
    setFilter,
    data,
    header,
    tables,
    handleOpenModalShipping,
    modalShipping,
    handleCloseModalShipping,
    handleCloseAndCompleteModalShipping,
    forms,
    handleCloseModalAddLine,
    handleOpenModalAddLine,
    modalAddLine,
  } = usePanelShipping()

  const ManualTable = () => {
    return (
      <S.ContainerManualTable>
        <S.ContainerTable>
          <DataGridShipping header={header} data={data} />
          <S.WrapperButtonAdd onClick={handleOpenModalAddLine}>
            <Typography
              size={14}
              weight="600"
              color={theme.palette.warning.lightest}
            >
              + Adicionar uma nova linha
            </Typography>
          </S.WrapperButtonAdd>
        </S.ContainerTable>
      </S.ContainerManualTable>
    )
  }

  const SendedTables = () => {
    return (
      <>
        {tables.map((item) => {
          return (
            <S.WrapperCard key={generateKey()}>
              <CardShipping
                company={item.shippingCompany}
                shippingDate={item.shippingDate}
                state={item.statesServed}
                status={item.status}
                id={item.id}
              />
            </S.WrapperCard>
          )
        })}
      </>
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
          <Field
            marginInputLeft={20}
            marginInputRight={20}
            inputWidth={200}
            fontSize={16}
            fontWeight={'600'}
            borderColor={'#E9E9E9'}
            textInputColor={theme.palette.text.dark}
            labelTop="Nome da transportadora"
            labelColor={theme.palette.text.dark}
            placeholderColor={theme.palette.text.dark}
            placeholder={'Correios'}
            name={'productDiscount'}
          />
        </S.WrapperShippingCompany>
        <S.WrapperTable>
          <Dropzone onFileUploaded={() => console.log('uploaded file')} />
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

  const ModalAddLine = () => {
    return (
      <S.ContainerModalAddLine>
        <S.WrapperTitleModal>
          <Typography size={18} weight="600" color={theme.palette.text.dark}>
            Adicionar Linha
          </Typography>
          <S.WrapperIcon onClick={handleCloseModalAddLine}>
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
            />
          </S.WrapperFields>
        </S.WrapperFormLine>
        <S.WrapperButtonShipping>
          <S.WrapperButtonCancelShipping onClick={handleCloseModalAddLine}>
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

  const filterSetup = {
    MANUAIS: <ManualTable />,
    ENVIADAS: <SendedTables />,
  }

  return (
    <S.Container>
      <Sidebar />
      <S.WrapperHeader>
        <HeaderPartner />
      </S.WrapperHeader>

      <S.WrapperFilters>
        <S.ContainerFilter filter={filter}>
          <Typography
            onClick={() => setFilter('ENVIADAS')}
            align="center"
            size={18}
            weight="700"
            color={
              filter === 'ENVIADAS'
                ? `${theme.palette.warning.lightest}`
                : `#9B9B9B`
            }
          >
            Tabelas enviadas
          </Typography>
        </S.ContainerFilter>
        <Separator horizontalSize={10} />
        <S.ContainerFilter filter={filter}>
          <Typography
            onClick={() => setFilter('MANUAIS')}
            align="center"
            size={18}
            weight="700"
            color={
              filter === 'MANUAIS'
                ? `${theme.palette.warning.lightest}`
                : `#9B9B9B`
            }
          >
            Tabelas manuais
          </Typography>
        </S.ContainerFilter>
        <S.WrapperButtonAddNewTable>
          <S.ContainerFilter>
            <ButtonGradient
              width={179}
              height={45}
              onClick={handleOpenModalShipping}
            >
              <Typography
                align="center"
                size={16}
                weight="600"
                color={theme.palette.primary.light}
              >
                + Nova tabela
              </Typography>
            </ButtonGradient>
          </S.ContainerFilter>
        </S.WrapperButtonAddNewTable>
      </S.WrapperFilters>
      {filterSetup[filter]}
      <Modal
        onClose={handleCloseModalShipping}
        open={modalShipping}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ModalShipping />
      </Modal>
      <Modal
        onClose={handleCloseModalAddLine}
        open={modalAddLine}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ModalAddLine />
      </Modal>
    </S.Container>
  )
}

export default PanelShipping
