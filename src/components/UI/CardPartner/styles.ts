import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const ContainerPartner = styled.div<DefaultProps>`
  display: flex;
  padding: 25px;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 379px;
  max-height: 310px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.secondary.lightest};
`

export const ContainerDescription = styled.div<DefaultProps>`
  max-width: 326px;
  max-height: 114px;
  padding: 50px 0;

  @media (max-width: 480px) {
    padding: 20px 0 60px 0;
  }
`

export const WrapperPhotoAndName = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 40px;
  max-height: 40px;
`

export const WrapperPhoto = styled.div`
  padding: 0 15px 0 0;
`
