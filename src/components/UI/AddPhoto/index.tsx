import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { theme } from '@resources/theme'
import Typography from '../Typography'
import * as S from './styles'

const AddPhoto = () => {
  return (
    <S.Container>
      <AddCircleOutlineIcon
        sx={{ color: theme.palette.warning.lightest, fontSize: 28 }}
      />
      <S.WrapperText>
        <Typography
          align="center"
          size={14}
          weight="400"
          color={theme.palette.warning.lightest}
        >
          Adicionar imagem
        </Typography>
      </S.WrapperText>
    </S.Container>
  )
}

export default AddPhoto
