import Typography from '@components/UI/Typography'
import { theme } from '@resources/theme'
import * as S from './styles'
import { IProps } from './types'

const CardRegister = ({
  IconTitle,
  title,
  description,
  status,
  openModal,
  buttonName,
}: IProps) => {
  return (
    <S.Container status={status}>
      <S.WrapperTitle>
        <S.WrapperIconWithTitle>
          <IconTitle />
          <Typography
            weight="700"
            size={16}
            lineHeight="19.2px"
            color={theme.palette.text.dark}
          >
            {title}
          </Typography>
        </S.WrapperIconWithTitle>
        <S.WrapperStatus status={status}>
          <Typography
            weight="700"
            size={12}
            color={status === 'PENDENTE' ? '#F39526' : '#41AF66'}
          >
            {status}
          </Typography>
        </S.WrapperStatus>
      </S.WrapperTitle>
      <S.WrapperDescription>
        <Typography weight="700" size={12} color={'#9B9B9B'}>
          {description}
        </Typography>
      </S.WrapperDescription>
      <S.ContainerButton>
        <S.WrapperButton status={status} onClick={openModal}>
          <Typography
            color={status === 'PENDENTE' ? '#FFF' : '#41AF66'}
            align="center"
            weight="600"
            size={16}
          >
            {status === 'PENDENTE' ? '+' : '✔'} {buttonName}
          </Typography>
        </S.WrapperButton>
      </S.ContainerButton>
    </S.Container>
  )
}

export default CardRegister
