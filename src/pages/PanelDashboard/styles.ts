import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const WrapperDashboard = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  width: 85%;
  gap: 16px;
`

export const WrapperTitle = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
  padding: 40px;
`

export const WrapperPedidos = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.palette.primary.light};
  width: 252px;
  height: 157px;
  border-radius: 16px;
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.05);
`

export const WrapperFaturamento = styled.div<DefaultProps>`
  background: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 251px;
  height: 157px;
  border-radius: 16px;
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.05);
`

export const WrapperSLA = styled.div<DefaultProps>`
  background: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 252px;
  height: 157px;
  border-radius: 16px;
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.05);
`

export const WrapperQuality = styled.div<DefaultProps>`
  background: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 252px;
  height: 157px;
  border-radius: 16px;
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.05);
`

export const WrapperProducts = styled.div<DefaultProps>`
  background: ${({ theme }) => theme.palette.primary.light};
  width: 519px;
  height: 345px;
  border-radius: 16px;
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.05);
`

export const WrapperMedium = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.palette.primary.light};
  width: 252px;
  height: 345px;
  border-radius: 16px;
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.05);
`

export const WrapperSelling = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.palette.primary.light};
  width: 252px;
  height: 345px;
  border-radius: 16px;
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.05);
`

export const WrapperTitleCard = styled.div<DefaultProps>`
  display: flex;
  padding: 20px;
`

export const WrapperText = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const WrapperGraphic = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin: 20px 0;
  padding: 0 20px;
`

export const WrapperProductName = styled.div<DefaultProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Bar = styled.div<DefaultProps & { index: number }>`
  display: flex;

  margin: 0 10px;
  ${({ index }) =>
    index === 0 &&
    `
    width: 276px;
    background-color: #dec87c;
  `}

  ${({ index }) =>
    index === 1 &&
    `
    width: 211px;
    background-color: #A99C70;
  `}

  ${({ index }) =>
    index === 2 &&
    `
    width: 166px;
    background-color: #695F5F;
  `}

  ${({ index }) =>
    index === 3 &&
    `
    width: 112px;
    background-color: #8D8D8D;
  `}

    ${({ index }) =>
    index === 4 &&
    `
    width: 112px;
    background-color: #B3B3B3;
  `}
  height: 14px;
`

export const WrapperBar = styled.div`
  display: flex;
  width: 278px;
  align-items: flex-start;
`

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WrapperChart = styled.div`
  display: flex;
  padding: 20px;
`
