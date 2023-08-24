import { theme } from '@resources/theme'
import Separator from '../Separator'
import * as S from './styles'
import { IProps } from './types'

const SelectDataGrid = ({
  list,
  onChange,
  marginInputTop,
  inputHeight = 48,
  inputWidth = 100,
  textAlign = 'left',

  labelColor = '',
  labelTop,
  value,
  textColor = theme.palette.text.dark,
  backgroundColor = theme.palette.primary.dark,
  textTransform = 'uppercase',
}: IProps) => {
  return (
    <S.Container>
      <>
        <S.Label labelColor={labelColor}>{labelTop}</S.Label>
        <Separator verticalSize={marginInputTop || 1} />
      </>
      <S.Select
        onChange={onChange}
        inputHeight={inputHeight}
        inputWidth={inputWidth}
        borderColor={'#E8D29B'}
        value={value}
        textAlign={textAlign}
        textColor={textColor}
        backgroundColor={backgroundColor}
        textTransform={textTransform}
      >
        {list.map((item) => (
          <S.Option key={item.id} value={item.value}>
            {item.value}
          </S.Option>
        ))}
      </S.Select>
      <Separator verticalSize={2} />
    </S.Container>
  )
}

export default SelectDataGrid
