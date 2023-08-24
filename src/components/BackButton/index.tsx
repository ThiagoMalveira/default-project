import Typography from '@components/UI/Typography'
import { useGoBack } from '@hooks/useGoBack'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { theme } from '@resources/theme'
import * as S from './styles'
import { IProps } from './types'

const BackButton = ({ title }: IProps) => {
  const { handleGoBack } = useGoBack()

  return (
    <S.Container onClick={handleGoBack}>
      <ArrowBackIcon />
      <Typography color={theme.palette.text.dark} size={18}>
        {title}
      </Typography>
    </S.Container>
  )
}

export default BackButton
