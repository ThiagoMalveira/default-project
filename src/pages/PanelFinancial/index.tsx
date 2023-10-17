import HeaderPartner from '@components/HeaderPartner'
import Sidebar from '@components/Sidebar'
import Icon from '@components/UI/Icon'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { theme } from '@resources/theme'
import { formatCurrency } from '@resources/utils/forNumber'
import { generateKey } from '@resources/utils/generateKey'
import { ArcElement, Chart as ChartJs, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Helmet } from 'react-helmet'
import * as S from './styles'
import usePanelFinancial from './usePanelFinancial'

const PanelFinancial = () => {
  ChartJs.register(ArcElement, Tooltip)

  const { datasets, data } = usePanelFinancial()
  const pedidos = '68'
  const pendente = '12'
  const commission = formatCurrency(235.09)
  const previsaoFaturamento = formatCurrency(14456.89)
  const discount = formatCurrency(945.9)
  const MedTicket = formatCurrency(345.9)

  return (
    <S.Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Financeiro | Konekte</title>
      </Helmet>
      <Sidebar />
      <S.WrapperHeader>
        <HeaderPartner />
      </S.WrapperHeader>
      <S.WrapperTitle>
        <Typography
          size={18}
          weight="600"
          color={theme.palette.warning.lightest}
        >
          Dados financeiros da sua operação
        </Typography>
      </S.WrapperTitle>
      <S.WrapperDashboard>
        <S.WrapperPedidos>
          <S.WrapperTitleCard>
            <Typography size={18} weight="400" align="center" color={'#9B9B9B'}>
              Total faturado
            </Typography>
          </S.WrapperTitleCard>
          <Typography
            size={16}
            weight="400"
            align="center"
            color={theme.palette.secondary.dark}
          >
            <Typography
              size={40}
              weight="600"
              align="center"
              color={theme.palette.warning.lightest}
            >
              {pedidos} {''}
            </Typography>
            / {pendente} pendentes
          </Typography>
        </S.WrapperPedidos>

        <S.WrapperFaturamento>
          <S.WrapperTitleCard>
            <Typography size={18} weight="400" align="center" color={'#9B9B9B'}>
              Previsão de faturamento
            </Typography>
          </S.WrapperTitleCard>
          <Typography
            size={32}
            weight="600"
            align="center"
            color={theme.palette.warning.lightest}
          >
            {previsaoFaturamento}
          </Typography>
        </S.WrapperFaturamento>

        <S.WrapperSLA>
          <S.WrapperTitleCard>
            <Typography size={18} weight="400" align="center" color={'#9B9B9B'}>
              Comissão Konekte
            </Typography>
          </S.WrapperTitleCard>
          <S.WrapperText>
            <Typography
              size={32}
              weight="600"
              align="center"
              color={theme.palette.warning.lightest}
            >
              {commission}
            </Typography>
          </S.WrapperText>
        </S.WrapperSLA>

        <S.WrapperQuality>
          <S.WrapperTitleCard>
            <Typography size={18} weight="400" align="center" color={'#9B9B9B'}>
              Descontos comerciais
            </Typography>
          </S.WrapperTitleCard>
          <S.WrapperText>
            <Typography
              size={32}
              weight="600"
              align="center"
              color={theme.palette.warning.lightest}
            >
              {discount}
            </Typography>
          </S.WrapperText>
        </S.WrapperQuality>
      </S.WrapperDashboard>
      <Separator verticalSize={10} />
      <S.WrapperDashboard>
        <S.WrapperProducts>
          <S.WrapperTitleCard>
            <Typography size={18} weight="400" align="center" color={'#9B9B9B'}>
              Produtos mais vendidos
            </Typography>
          </S.WrapperTitleCard>
          <S.WrapperGraphic>
            {datasets.map((item, index) => {
              return (
                <S.WrapperProductName key={generateKey()}>
                  <Typography
                    size={14}
                    weight="400"
                    align="center"
                    color={theme.palette.text.dark}
                  >
                    {item.label}
                  </Typography>

                  <S.WrapperBar>
                    <S.Bar index={index} />
                  </S.WrapperBar>
                  <Typography
                    size={14}
                    weight="400"
                    align="center"
                    color={theme.palette.text.dark}
                  >
                    {item.data}
                  </Typography>
                </S.WrapperProductName>
              )
            })}
          </S.WrapperGraphic>
        </S.WrapperProducts>

        <S.WrapperMedium>
          <S.WrapperTitleCard>
            <Typography size={18} weight="400" align="center" color={'#9B9B9B'}>
              Ticket médio
            </Typography>
          </S.WrapperTitleCard>
          <S.WrapperIcon>
            <Icon name="ChartSVG" />
          </S.WrapperIcon>
          <S.WrapperText>
            <Typography
              size={32}
              weight="600"
              align="center"
              color={theme.palette.warning.lightest}
            >
              {MedTicket}
            </Typography>
          </S.WrapperText>
        </S.WrapperMedium>

        <S.WrapperSelling>
          <S.WrapperTitleCard>
            <Typography size={18} weight="400" align="center" color={'#9B9B9B'}>
              Vendas por região
            </Typography>
          </S.WrapperTitleCard>
          <S.WrapperChart>
            <Doughnut data={data} />
          </S.WrapperChart>
        </S.WrapperSelling>
      </S.WrapperDashboard>
    </S.Container>
  )
}

export default PanelFinancial
