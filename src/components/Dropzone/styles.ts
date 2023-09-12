import styled from '@emotion/styled'

import { DefaultProps } from '@resources/types'

export const Container = styled.div`
  margin: 30px 0 0 0;
`

export const UploadContainer = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 477px;
  height: 173px;

  background-color: ${({ theme }) => theme.palette.primary.lightest};
  border-radius: 10px;
`

export const ContainerText = styled.div<DefaultProps>`
  padding: 0px 34px;
  width: 80%;
`

export const WrapperText = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const DropZoneContainer = styled.div<DefaultProps>`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 477px;
  height: 173px;

  border: 1px solid ${({ theme }) => theme.palette.info.dark};
  border-radius: 10px;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border: 1px solid #333434;
    border-radius: 10px;
  }
`
