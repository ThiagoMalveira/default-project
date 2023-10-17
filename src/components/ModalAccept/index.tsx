import Button from '@components/UI/Button'
import Field from '@components/UI/Field'
import Typography from '@components/UI/Typography'
import { useUpdateStatus } from '@hooks/useUpdateStatus'
import CloseIcon from '@mui/icons-material/Close'
import SummarizeIcon from '@mui/icons-material/Summarize'
import { theme } from '@resources/theme'
import { memo } from 'react'
import * as S from './styles'
import { IProps } from './types'

const ModalAccept = ({ id }: IProps) => {
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
            <SummarizeIcon
              sx={{ color: theme.palette.success.dark, fontSize: 49 }}
            />
          </S.WrapperIcon>
          <Typography
            align="center"
            size={24}
            weight="600"
            color={theme.palette.text.dark}
          >
            Qual a quantidade de produtos liberada para este parceiro?
          </Typography>
        </S.WrapperTitle>
        <S.WrapperField>
          <Field
            name="quantity"
            inputHeight={40}
            inputWidth={150}
            labelColor={theme.palette.text.dark}
          />
        </S.WrapperField>
      </S.WrapperReason>
      <S.WrapperButton>
        <Button
          bgColor={theme.palette.success.dark}
          borderRadius={100}
          widthFull
          onClick={() => handleUpdateClient({ id, status })}
        >
          Aprovar parceira
        </Button>
      </S.WrapperButton>
    </S.ContainerModal>
  )
}

export default memo(ModalAccept)
