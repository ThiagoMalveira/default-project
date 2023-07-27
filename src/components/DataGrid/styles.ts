import styled from '@emotion/styled'

import { DefaultProps } from '@resources/types'

export const Container = styled.div<DefaultProps>`
  max-width: ${({ theme }) => theme.layout.desktop.dimensions.large.maxWidth};
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
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  padding: 5px 0;
  margin: 5px 0;

  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }

  ${({ item, theme }) =>
    !item &&
    `
    border-bottom: 2px solid ${theme.palette.common[2]}
  `}

  ${({ item, theme }) =>
    item &&
    `
    cursor: pointer;

    &:hover {
      background: ${theme.palette.common[10]}50;
    }
  `}
`

export const Column = styled.div<{ grid: number; align: string }>`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 2px;
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
