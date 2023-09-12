import HeaderPartner from '@components/HeaderPartner'
import Sidebar from '@components/Sidebar'
import Icon from '@components/UI/Icon'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import { theme } from '@resources/theme'
import { formatCurrency, formatPercent } from '@resources/utils/forNumber'
import { generateKey } from '@resources/utils/generateKey'
import * as S from './styles'
import usePanelDashboard from './usePanelDashboard'

const PanelDashboard = () => {
  const { datasets /*data, colors, getArcLabel*/ } = usePanelDashboard()
  const pedidos = '68'
  const pendente = '12'
  const faturamento = formatCurrency(12345.9)
  const SLA = 90
  const Quality = 9.5
  const MedTicket = formatCurrency(345.9)

  return (
    <S.Container>
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
          Resumo de sua operação
        </Typography>
      </S.WrapperTitle>
      <S.WrapperDashboard>
        <S.WrapperPedidos>
          <S.WrapperTitleCard>
            <Typography size={18} weight="400" align="center" color={'#9B9B9B'}>
              Pedidos
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
              Faturamento
            </Typography>
          </S.WrapperTitleCard>
          <Typography
            size={32}
            weight="600"
            align="center"
            color={theme.palette.warning.lightest}
          >
            {faturamento}
          </Typography>
        </S.WrapperFaturamento>

        <S.WrapperSLA>
          <S.WrapperTitleCard>
            <Typography size={18} weight="400" align="center" color={'#9B9B9B'}>
              SLA de entrega
            </Typography>
          </S.WrapperTitleCard>
          <S.WrapperText>
            <Typography
              size={32}
              weight="600"
              align="center"
              color={theme.palette.warning.lightest}
            >
              {formatPercent(SLA)}
            </Typography>
            {SLA >= 20 ? (
              <StarIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : SLA >= 10 ? (
              <StarHalfIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : (
              <StarBorderIcon sx={{ color: theme.palette.tertiary.dark }} />
            )}
            {SLA >= 40 ? (
              <StarIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : SLA >= 30 ? (
              <StarHalfIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : (
              <StarBorderIcon sx={{ color: theme.palette.tertiary.dark }} />
            )}
            {SLA >= 60 ? (
              <StarIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : SLA >= 50 ? (
              <StarHalfIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : (
              <StarBorderIcon sx={{ color: theme.palette.tertiary.dark }} />
            )}
            {SLA >= 80 ? (
              <StarIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : SLA >= 70 ? (
              <StarHalfIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : (
              <StarBorderIcon sx={{ color: theme.palette.tertiary.dark }} />
            )}
            {SLA >= 100 ? (
              <StarIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : SLA >= 90 ? (
              <StarHalfIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : (
              <StarBorderIcon sx={{ color: theme.palette.tertiary.dark }} />
            )}
          </S.WrapperText>
        </S.WrapperSLA>

        <S.WrapperQuality>
          <S.WrapperTitleCard>
            <Typography size={18} weight="400" align="center" color={'#9B9B9B'}>
              SLA de entrega
            </Typography>
          </S.WrapperTitleCard>
          <S.WrapperText>
            <Typography
              size={32}
              weight="600"
              align="center"
              color={theme.palette.warning.lightest}
            >
              {Quality}
            </Typography>
            {Quality >= 2 ? (
              <StarIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : Quality >= 1 ? (
              <StarHalfIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : (
              <StarBorderIcon sx={{ color: theme.palette.tertiary.dark }} />
            )}
            {Quality >= 4 ? (
              <StarIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : Quality >= 3 ? (
              <StarHalfIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : (
              <StarBorderIcon sx={{ color: theme.palette.tertiary.dark }} />
            )}
            {Quality >= 6 ? (
              <StarIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : Quality >= 5 ? (
              <StarHalfIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : (
              <StarBorderIcon sx={{ color: theme.palette.tertiary.dark }} />
            )}
            {Quality >= 8 ? (
              <StarIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : Quality >= 7 ? (
              <StarHalfIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : (
              <StarBorderIcon sx={{ color: theme.palette.tertiary.dark }} />
            )}
            {Quality >= 10 ? (
              <StarIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : Quality >= 9 ? (
              <StarHalfIcon sx={{ color: theme.palette.tertiary.dark }} />
            ) : (
              <StarBorderIcon sx={{ color: theme.palette.tertiary.dark }} />
            )}
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
            {/*<PieChart
              colors={colors}
              sx={{ background: '#B3B3B3' }}
              series={[
                {
                  paddingAngle: 5,
                  innerRadius: 60,
                  outerRadius: 80,
                  data,
                  arcLabel: getArcLabel,
                },
              ]}
              margin={{ right: 5 }}
              width={200}
              height={200}
              legend={{ hidden: true }}
            />*/}
          </S.WrapperChart>
        </S.WrapperSelling>
      </S.WrapperDashboard>
    </S.Container>
  )
}

export default PanelDashboard
