import { IStyleProps } from "@components/UI/Icon/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DefaultProps } from "@resources/types";

export const Container = styled.div`
  margin: 0 0 0 0;
  width: 100%;
`;
export const ContainerContent = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 300px;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  max-height: 660px;

`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const WrapperIcon = styled.div<DefaultProps>`
  height: 96px;
  width: 96px;
  left: calc(100% - 600px);
  position: absolute;
`

export const ContainerWhatsApp = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: center;
`

export const ContainerTitle = styled.div`
  display: flex;
  padding: 60px 60px;
  align-items: center;
  max-width: 625px;
  justify-content: center;
  text-align: center;
`

export const ContainerTextLighter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContainerStep = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutral.light};
` 

export const ContainerPartners = styled.div`
  padding: 48px 0;
  display: flex;
  justify-content: center;
`

export const AllTextsLighter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  justify-content: center;
  align-items: flex-start;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -200px;
`;

export const WrapperButton = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const Button = styled.button<IStyleProps & DefaultProps>`
  background: linear-gradient(
    237deg,
    ${({ theme }) => theme.palette.secondary.regular} 0%,
    ${({ theme }) => theme.palette.secondary.light} 100%
  );
  ${({ width }) => width && `width: ${width}px`};
  ${({ height }) => height && `height: ${height}px`};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fonts.normal};
  border: none;
  font-size: 14px;
  font-weight: bold;
  transition: 0.5s;
  border-radius: 100px;

  &:hover {
    opacity: 0.8;

    ${({ theme }) => {
      return css`
        li a: {
          color: ${theme.palette.secondary.dark};
        }
      `;
    }}
  }
`;
