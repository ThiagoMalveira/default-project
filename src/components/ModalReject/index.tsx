import Button from '@components/UI/Button'
import Field from '@components/UI/Field'
import Typography from '@components/UI/Typography'
import { useUpdateStatus } from '@hooks/useUpdateStatus'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import CloseIcon from '@mui/icons-material/Close'
import { theme } from '@resources/theme'
import { memo } from 'react'
import * as S from './styles'
import { IProps } from './types'

const ModalReject = ({ id }: IProps) => {
  const { handleUpdateClient } = useUpdateStatus()
  const status = 'REPROVADO'

  return (
    <S.ContainerModal>
      <S.WrapperCloseButton>
        <CloseIcon sx={{ color: theme.palette.error.dark }} />
      </S.WrapperCloseButton>

      <S.WrapperReason>
        <S.WrapperTitle>
          <S.WrapperIcon>
            <CancelPresentationIcon
              sx={{ color: theme.palette.error.dark, fontSize: 49 }}
            />
          </S.WrapperIcon>
          <Typography
            align="center"
            size={24}
            weight="600"
            color={theme.palette.text.dark}
          >
            Escreva o motivo da reprovação
          </Typography>
        </S.WrapperTitle>
        <S.WrapperField>
          <Field
            name="description"
            inputHeight={98}
            inputWidth={427}
            labelTop="Descrição"
            labelColor={theme.palette.text.dark}
            placeholder="Escreva aqui"
          />
        </S.WrapperField>
      </S.WrapperReason>
      <S.WrapperButton>
        <Button
          bgColor={theme.palette.error.dark}
          borderRadius={100}
          widthFull
          onClick={() => handleUpdateClient({ id, status })}
        >
          Reprovar parceira
        </Button>
      </S.WrapperButton>
    </S.ContainerModal>
  )
}

export default memo(ModalReject)
