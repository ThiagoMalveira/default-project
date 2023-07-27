import { theme } from '@resources/theme'
import Icon from '../Icon/'
import Typography from '../Typography'
import * as S from './styles'
import { IProps } from './types'

const Card = ({ iconName, step, title, description }: IProps) => {
  return (
    <S.Container>
      <S.AlignIcon>
        <S.WrapperIcon>
          <Icon name={iconName} />
        </S.WrapperIcon>
      </S.AlignIcon>
      <S.Step>
        <Typography
          align="center"
          color={theme.palette.neutral.dark}
          size={12}
          lineHeight="14px"
          weight="700"
        >
          Passo {step}
        </Typography>
      </S.Step>

      <S.Title>
        <Typography
          align="center"
          color={theme.palette.text.dark}
          size={22}
          lineHeight="26px"
          weight="800"
        >
          {title}
        </Typography>
      </S.Title>

      <S.Description>
        <Typography
          align="center"
          color={theme.palette.text.light}
          size={18}
          lineHeight="21px"
          weight="600"
        >
          {description}
        </Typography>
      </S.Description>
    </S.Container>
  )
}

export default Card
