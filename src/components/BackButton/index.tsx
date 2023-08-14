import Typography, { FontType } from '@components/UI/Typography'
import { useGoBack } from '@hooks/useGoBack'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { theme } from '@resources/theme'
import { Container } from './styles'
import { IProps } from './types'

const BackButton = ({ title }: IProps) => {
  const handleGoBack = useGoBack()

  return (
    <Container>
      <ArrowBackIcon onClick={handleGoBack} />
      <Typography
        fontType={FontType.neueMetana}
        color={theme.palette.text.dark}
        size={18}
      >
        {title}
      </Typography>
    </Container>
  )
}

export default BackButton
