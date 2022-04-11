import styled, { css } from "styled-components/native";
import Constants from "expo-constants";

type BaseContainerProps = {
  backgroundColor?: string;
};
export const BaseContainer = styled.View<BaseContainerProps>`
  flex: 1;
  padding: 26px;
  padding-top: ${Constants.statusBarHeight}px;
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;
