import Typography from '@components/UI/Typography'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import { theme } from '@resources/theme'
import * as S from './styles'
import { IProps } from './types'

const CardShipping = ({ company, shippingDate, state, status, id }: IProps) => {
  return (
    <S.Container>
      <S.WrapperIcon>
        <LocalShippingOutlinedIcon />
      </S.WrapperIcon>
      <S.WrapperCompanyName>
        <S.WrapperTitle>
          <Typography size={14} weight="400" color={'#9B9B9B'}>
            Transportadora
          </Typography>
        </S.WrapperTitle>
        <S.WrapperInfo>
          <Typography size={14} weight="600" color={theme.palette.text.dark}>
            {company}
          </Typography>
        </S.WrapperInfo>
      </S.WrapperCompanyName>
      <S.WrapperShippingDate>
        <S.WrapperTitle>
          <Typography size={14} weight="400" color={'#9B9B9B'}>
            Data de envio
          </Typography>
        </S.WrapperTitle>
        <S.WrapperInfo>
          <Typography size={14} weight="600" color={theme.palette.text.dark}>
            {shippingDate}
          </Typography>
        </S.WrapperInfo>
      </S.WrapperShippingDate>
      <S.WrapperStatesServed>
        <S.WrapperTitle>
          <Typography size={14} weight="400" color={'#9B9B9B'}>
            Estados atendidos
          </Typography>
        </S.WrapperTitle>
        <S.WrapperInfo>
          <Typography size={14} weight="600" color={theme.palette.text.dark}>
            {state}
          </Typography>
        </S.WrapperInfo>
      </S.WrapperStatesServed>
      <S.WrapperStatus>
        <S.WrapperTitle>
          <Typography size={14} weight="400" color={'#9B9B9B'}>
            Status
          </Typography>
        </S.WrapperTitle>
        <S.WrapperStatusSelect status={status}>
          <Typography
            size={14}
            weight="600"
            color={status === 'Ativo' ? '#41AF66' : '#D55555'}
          >
            {status}
          </Typography>
        </S.WrapperStatusSelect>
      </S.WrapperStatus>
      <S.WrapperAction>
        <S.WrapperTitle>
          <Typography size={14} weight="600" color={theme.palette.text.dark}>
            AÇÃO
          </Typography>
        </S.WrapperTitle>
        <S.WrapperTrash>
          <DeleteOutlineOutlinedIcon sx={{ color: '#D55555' }} />
        </S.WrapperTrash>
      </S.WrapperAction>
    </S.Container>
  )
}

export default CardShipping
