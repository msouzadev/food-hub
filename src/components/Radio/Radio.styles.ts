import styled, { css } from "styled-components/native";

export const Container = styled.View<{ checked?: boolean }>`
  width: 23px;
  height: 23px;
  border-radius: 12px;
  border: 1px solid #d4d5dab2;
  justify-content: center;
  align-items: center;
  ${({ theme, checked }) =>
    checked &&
    css`
      border-color: ${theme.colors.orange};
    `};
`;
export const Checked = styled.View`
  width: 13px;
  height: 13px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.orange};
`;
