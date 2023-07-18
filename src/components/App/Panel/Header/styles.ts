import styled from "@emotion/styled";

import { DefaultProps } from "@resources/types";

export const Container = styled.div<DefaultProps>`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  justify-content: space-around;
  align-items: center;
  height: 60px;
  padding: 30px 30px 30px 10px;
  margin: 0 0 8px;
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
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 0 0 0 20px;

  &:hover {
    div {
      visibility: visible;
    }
  }
`;

export const WrapperMenuAvatar = styled.div<DefaultProps>`
  visibility: hidden;
  width: fit-content;
  height: 195px;
  border-radius: 8px;
  position: relative;
  z-index: 999;
  right: 125px;
  top: -60px;
  padding: 15px;
  cursor: auto;
  transition: 0.2s ease-in-out;
  background: ${({ theme }) => theme.palette.neutral.dark};
`;
export const MenuAvatarProfile = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MenuAvatarOption = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0 0;
  cursor: pointer;
`;

export const WrapperOptionIcon = styled.div<DefaultProps>`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 10px 0 0;
`;
