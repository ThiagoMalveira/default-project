import CardShipping from '@components/CardShipping'
import DataGridShipping from '@components/DataGridShipping'
import HeaderPartner from '@components/HeaderPartner'
import Sidebar from '@components/Sidebar'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { theme } from '@resources/theme'
import { generateKey } from '@resources/utils/generateKey'
import * as S from './styles'
import usePanelShipping from './usePanelShipping'

const PanelShipping = () => {
  const { filter, setFilter, data, header, tables } = usePanelShipping()

  const ManualTable = () => {
    return (
      <S.ContainerManualTable>
        <S.ContainerTable>
          <DataGridShipping header={header} data={data} />
          <S.WrapperButtonAdd>
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
      </S.WrapperFilters>
      {filterSetup[filter]}
    </S.Container>
  )
}

export default PanelShipping
