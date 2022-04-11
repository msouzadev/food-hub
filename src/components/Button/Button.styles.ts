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

const buttonTextColor = (variant?: string, buttonColor?: string) => {
  if (variant === "outlined") {
    return css`
      color: #fefefe;
    `;
  }
  if (buttonColor === "primary") {
    return css`
      color: #ffffff;
    `;
  }
  return css`
    color: #000000;
  `;
};

const buttonBackground = (variant?: string, color?: string) => {
  if (variant === "outlined") {
    return css`
      background: rgba(255, 255, 255, 0.21);
      border: 1px solid #ffffff;
    `;
  }
  if (color === "primary") {
    return css`
      background: ${({ theme }) => theme.colors.orange};
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
  ${({ variant, color }) => buttonBackground(variant, color)}
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
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  font-size: ${({ variant }) => (variant === "outlined" ? "17px" : "15px")};
  line-height: ${({ variant }) => (variant === "outlined" ? "17px" : "15px")};
  ${({ variant, buttonColor }) => buttonTextColor(variant, buttonColor)}
  ${({ hasIcon }) =>
    hasIcon &&
    css`
      margin-left: 10px;
    `}
`;
