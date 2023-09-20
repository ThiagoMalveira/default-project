import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1056px;
  height: 109px;
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.primary.light};
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.05);
`

export const WrapperIcon = styled.div<DefaultProps>`
  display: flex;
  margin: 0 50px;
  width: 47px;
  height: 47px;
  border-radius: 100px;
  background-color: rgb(202, 183, 128, 0.15);
  color: #cab780;
  align-items: center;
  justify-content: center;
`

export const WrapperTitle = styled.div<DefaultProps>``

export const WrapperCompanyName = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const WrapperStatusSelect = styled.div<{ status: string }>`
  display: flex;
  width: 96px;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  ${({ status }) =>
    status === 'Ativo' &&
    `
    background: #E3F5E3;
    `}

  ${({ status }) =>
    status === 'Desativado' &&
    `
    background: rgb(213, 85, 85, 0.5);
  `}
`

export const WrapperInfo = styled.div<DefaultProps>``

export const WrapperTrash = styled.div<DefaultProps>`
  display: flex;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const WrapperShippingDate = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 50px;
`

export const WrapperStatesServed = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 50px;
`

export const WrapperStatus = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 50px;
  align-items: center;
`

export const WrapperAction = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 50px;
  align-items: center;
`
