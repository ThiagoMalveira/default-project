import Button from '@components/UI/Button'
import Typography from '@components/UI/Typography'
import { useUpdateStatus } from '@hooks/useUpdateStatus'
import CloseIcon from '@mui/icons-material/Close'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { theme } from '@resources/theme'
import { memo } from 'react'
import * as S from './styles'
import { IProps } from './types'

const ModalPending = ({ id }: IProps) => {
  const { handleUpdateClient } = useUpdateStatus()
  const status = 'PENDENTE'

  return (
    <S.ContainerModal>
      <S.WrapperCloseButton>
        <CloseIcon sx={{ color: theme.palette.success.dark }} />
      </S.WrapperCloseButton>

      <S.WrapperReason>
        <S.WrapperTitle>
          <S.WrapperIcon>
            <QuestionMarkIcon
              sx={{ color: theme.palette.warning.regular, fontSize: 49 }}
            />
          </S.WrapperIcon>
          <Typography
            align="center"
            size={24}
            weight="600"
            color={theme.palette.text.dark}
          >
            Tem certeza que deseja voltar para pendente?
          </Typography>
        </S.WrapperTitle>
      </S.WrapperReason>
      <S.WrapperButton>
        <Button
          bgColor={theme.palette.warning.regular}
          borderRadius={100}
          widthFull
          onClick={() => handleUpdateClient({ id, status })}
        >
          Voltar para pendente
        </Button>
      </S.WrapperButton>
    </S.ContainerModal>
  )
}

export default memo(ModalPending)
