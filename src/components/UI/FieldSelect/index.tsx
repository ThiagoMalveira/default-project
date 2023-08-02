import { theme } from '@resources/theme'
import Separator from '../Separator'
import * as S from './styles'
import { IProps } from './types'

const FieldSelect = ({
  list,
  onChange,
  marginInputTop,
  inputHeight = 48,
  inputWidth = 100,
  textAlign = 'left',

  labelColor = '',
  labelTop,
  textColor = theme.palette.text.dark,
  backgroundColor = 'transparent',
  textTransform = 'uppercase',
}: IProps) => {
  return (
    <S.Container>
      <>
        <S.Label labelColor={labelColor}>{labelTop}</S.Label>
        <Separator verticalSize={marginInputTop || 1} />
      </>
      <S.Select
        onChange={(item) => (onChange ? onChange(item.target.value) : {})}
        inputHeight={inputHeight}
        inputWidth={inputWidth}
        borderColor={'#E8D29B'}
        textAlign={textAlign}
        textColor={textColor}
        backgroundColor={backgroundColor}
        textTransform={textTransform}
      >
        {list.map((item) => (
          <S.Option key={item.segmentoId} value={item.segmentoNome}>
            {item.segmentoNome}
          </S.Option>
        ))}
      </S.Select>
      <Separator verticalSize={2} />
    </S.Container>
  )
}

export default FieldSelect
