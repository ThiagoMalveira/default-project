import styled from '@emotion/styled'

import { DefaultProps } from '@resources/types'
import { GridProps } from './types'

export const Container = styled.div<DefaultProps>`
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;

  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }
`
export const Row = styled.div<{ item?: boolean } & DefaultProps>`
  display: flex;
  float: left;
  width: 1205px;
  background: ${({ theme }) => theme.palette.primary.lightest};
  max-height: 50px;
  border-radius: 5px;
  height: 100vh;
  box-sizing: border-box;
  padding: 5px 10px;
  margin: 5px 0;

  @media (max-width: 1366px) {
    width: 1056px;
  }

  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }

  ${({ item, theme }) =>
    item &&
    `
    cursor: pointer;
    

    &:hover {
      background: ${theme.palette.tertiary.dark};
    }
  `}
`

export const Column = styled.div<DefaultProps & GridProps>`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  min-height: 1px;
  box-sizing: border-box;
  margin: 0 2px 0 20px;
  color: ${({ theme }) => theme.palette.secondary.dark};
  justify-content: ${({ align }) =>
    align === 'left' ? 'flex-start' : 'flex-end'};

  @media only screen and (min-width: 768px) {
    width: ${({ grid }) => (grid ? (grid / 12) * 100 : '8:33')}%;
  }

  &:first-of-type {
    margin: 0px 2px 0px 0px;
  }

  &:last-child {
    margin: 0px 0px 0px 2px;
  }
`

export const AllRows = styled.div<{ item?: boolean } & DefaultProps>`
  display: flex;
  float: left;
  width: 1205px;
  background: ${({ theme }) => theme.palette.primary.light};
  border-bottom: 1px solid ${({ theme }) => theme.palette.info.lightest};
  max-height: 65px;
  border-radius: 5px;
  height: 100vh;
  box-sizing: border-box;
  padding: 5px 0;
  margin: 5px 0;

  @media (max-width: 1366px) {
    width: 1056px;
  }

  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }

  ${({ item }) =>
    item &&
    `
    cursor: pointer;
    
  `}
`
