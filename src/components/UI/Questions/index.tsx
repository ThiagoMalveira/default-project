import { theme } from '@resources/theme'
import { useState } from 'react'
import Icon from '../Icon/'
import Separator from '../Separator'
import Typography from '../Typography'
import * as S from './styles'
import { IProps } from './types'

const Question = ({ title, answer }: IProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <S.Container open={open}>
        <S.WrapperTitle>
          <Typography
            color={theme.palette.primary.dark}
            size={20}
            lineHeight="30px"
            weight="600"
          >
            {title}
          </Typography>
          {open ? (
            <Icon onCallback={() => setOpen(false)} name="minus" />
          ) : (
            <Icon onCallback={() => setOpen(true)} name="plus" />
          )}
        </S.WrapperTitle>

        {open && (
          <S.WrapperAnswer>
            <Typography>{answer}</Typography>
          </S.WrapperAnswer>
        )}
      </S.Container>
      <Separator verticalSize={20} />
    </>
  )
}

export default Question
