import { useTheme } from '@emotion/react'

import { DefaultProps } from '@resources/types'
import Separator from '@components/UI/Separator'

import { IViewProps } from './types'
import * as SC from './styles'
import Typography, { FontType } from '../Typography'

const Field = ({
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
  testID = 'InputComponentID',
  onChange,
  placeholder,
  type = 'text',
  value,
  onBlur,
  focus = false,
  errorMessage = '',
}: IViewProps) => {
  const theme: DefaultProps | any = useTheme()

  const inputs = {
    default: () => (
      <SC.ContainerInput>
        <SC.Input
          ref={inputRef}
          data-testid={testID}
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
          textColor={theme.color}
          backgroundColor={theme.background}
          placeholderColor={theme.placeholder}
          borderColor={theme.border}
        />
        <Typography
          size={12}
          align="flex-start"
          lineHeight="15px"
          fontType={FontType.bold}
          color={theme.palette.error[1]}
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

export default Field
