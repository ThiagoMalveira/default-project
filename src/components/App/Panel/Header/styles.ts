import styled from "@emotion/styled";

import { DefaultProps } from "@resources/types";

export const Container = styled.div<DefaultProps>`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  justify-content: space-around;
  align-items: center;
  height: 60px;
  padding: 30px 30px 30px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.dark};
`;
export const WrapperLogo = styled.div``;
export const WrapperMenu = styled.div`
  display: flex;
  flex: 1;
  height: 40px;
  justify-content: flex-end;
  align-items: center;
`;

export const WrapperButton = styled.div`
  width: 250px;
  height: 50px;
  cursor: pointer;

  &:hover {
    div {
      visibility: visible;
    }
  }
`;
