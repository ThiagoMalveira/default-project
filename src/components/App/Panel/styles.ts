import styled from "@emotion/styled";

import { DefaultProps } from "@resources/types";
import { mediaQuerydevices } from "@resources/types/devices";

export const Container = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const WrapperContent = styled.div<DefaultProps>`
  width: calc(100% - 80px);
  padding: 0 50px 20px;
  min-width: ${({ theme }) => theme.layout.desktop.dimensions.large.minWidth};

  @media (${mediaQuerydevices.maxDesktop}) {
    max-width: ${({ theme }) => theme.layout.desktop.dimensions.large.maxWidth};
  }
`;

export const Content = styled.div`
  padding: 0;
  margin: 0;
`;
