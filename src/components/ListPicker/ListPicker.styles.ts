import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity<{ isSelected?: boolean }>`
  background-color: #f2eaea;
  padding: 10px 17px;
  border: 1px solid #f2eaea;
  border-radius: 16px;
  margin-right: 10px;
  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.orange};
    `}
`;

export const ItemName = styled.Text<{ isSelected?: boolean }>`
  color: #5b5b5e;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 15px;
  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      color: #ffffff;
    `}
`;
