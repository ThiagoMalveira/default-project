import Typography from '@components/UI/Typography'
import { useGoBack } from '@hooks/useGoBack'
import useHandleLogout from '@hooks/useHandleLogout'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { theme } from '@resources/theme'
import * as S from './styles'
import { IProps } from './types'

const BackButton = ({ title, useLogout }: IProps) => {
  const { handleGoBack } = useGoBack()
  const { handleLogout } = useHandleLogout()

  return (
    <S.Container onClick={useLogout ? handleLogout : handleGoBack}>
      <ArrowBackIcon />
      <Typography color={theme.palette.text.dark} size={18}>
        {title}
      </Typography>
    </S.Container>
  )
}

export default BackButton
