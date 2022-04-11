import styled, { css } from "styled-components/native";

type ButtonProps = {
  hasIcon?: boolean;
  fullwidth?: boolean;
  variant?: string;
};

type TitleProps = {
  hasIcon?: boolean;
  variant?: string;
};

const buttonTextColor = (variant?: string) => {
  if (variant === "outlined") {
    return css`
      color: #fefefe;
    `;
  }
  return css`
    color: #000000;
  `;
};

const buttonBackground = (variant?: string) => {
  if (variant === "outlined") {
    return css`
      background: rgba(255, 255, 255, 0.21);
      border: 1px solid #ffffff;
    `;
  }
  return css`
    background: #ffffff;
  `;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  align-items: center;
  background: #ffffff;

  ${({ variant }) => buttonBackground(variant)}
  box-shadow: 17.8734px 17.8734px 35.7469px rgba(211, 209, 216, 0.25);
  border-radius: 30px;
  padding: 22px 15px;
  width: 140px;
  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding: 13px 15px;
    `}
  ${({ fullwidth }) =>
    fullwidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: ${({ variant }) => (variant === "outlined" ? "17px" : "13px")};
  line-height: ${({ variant }) => (variant === "outlined" ? "17px" : "17px")};
  ${({ variant }) => buttonTextColor(variant)}
  ${({ hasIcon }) =>
    hasIcon &&
    css`
      margin-left: 10px;
    `}
`;
