import Separator from '@components/UI/Separator'

import Typography, { FontType } from '../Typography'
import * as SC from './styles'
import { IViewProps } from './types'

const FieldPassword = ({
  inputRef,
  inputWidth = 100,
  inputHeight = 48,
  widthFull = false,
  name = '',

  labelTop,
  labelLeft,
  labelRight,

  marginInputTop,
  marginInputLeft,
  marginInputRight,

  labelColor = '',

  maxLength = 50,
  onChange,
  placeholder,
  type = 'text',
  value,
  onBlur,
  focus = false,
  errorMessage = '',
}: IViewProps) => {
  const inputs = {
    default: () => (
      <SC.ContainerInput>
        <SC.Input
          ref={inputRef}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
          autoFocus={focus}
          onBlur={onBlur}
          maxLength={maxLength}
          type={type}
          inputWidth={inputWidth}
          widthFull={widthFull}
          inputHeight={inputHeight}
        />
        <Typography
          size={16}
          align="flex-start"
          lineHeight="15px"
          weight="400"
          fontType={FontType.bold}
        >
          {errorMessage}
        </Typography>
      </SC.ContainerInput>
    ),
  }

  const inputActive = inputs['default']()

  return (
    <SC.Container>
      {!!labelTop && (
        <>
          <SC.Label labelColor={labelColor}>{labelTop}</SC.Label>
          <Separator verticalSize={marginInputTop || 1} />
        </>
      )}

      <SC.Content>
        <>
          {!!labelLeft && (
            <>
              <SC.Label margin={marginInputLeft} labelColor={labelColor}>
                {labelLeft}
              </SC.Label>
            </>
          )}

          {inputActive}

          {!!labelRight && (
            <>
              <Separator horizontalSize={5} />
              <SC.Label margin={marginInputRight} labelColor={labelColor}>
                {labelRight}
              </SC.Label>
            </>
          )}
        </>
      </SC.Content>
    </SC.Container>
  )
}

export default FieldPassword
