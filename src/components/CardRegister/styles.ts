import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div<{ status: string }>`
  display: flex;
  flex-direction: column;
  width: 568px;
  height: 145px;
  border-radius: 10px;
  ${({ status }) =>
    status === 'PENDENTE' &&
    `
    border: 1px solid #f6c790;
  `}

  ${({ status }) =>
    status === 'CONCLUIDO' &&
    `
    border: 1px solid #4bba4f;
  `}
  background: transparent;
`

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
`

export const WrapperStatus = styled.div<{ status: string }>`
  display: flex;
  width: 96px;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  ${({ status }) =>
    status === 'PENDENTE' &&
    `
    background: #F9EEE5;
  `}

  ${({ status }) =>
    status === 'CONCLUIDO' &&
    `
    background: #E3F5E3;
  `}
`

export const WrapperDescription = styled.div`
  width: 362px;
  padding: 0 70px;
`

export const WrapperIconWithTitle = styled.div`
  display: flex;
  gap: 10px;
`

export const WrapperButton = styled.button<DefaultProps & { status: string }>`
  display: inline-flex;
  border: none;
  flex-direction: row;
  color: #fff;
  width: 250px;
  height: 42px;

  gap: 13px;
  border-radius: 100px;
  align-items: center;

  ${({ status }) =>
    status === 'PENDENTE' &&
    `
    background-color: #F39526;
    justify-content: center;
  `}

  ${({ status }) =>
    status === 'CONCLUIDO' &&
    `
    background-color: transparent;
    justify-content: flex-start;
  `}

&:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  padding: 10px 60px;
`
