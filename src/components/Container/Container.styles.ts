import styled from "styled-components/native";
import Constants from "expo-constants";

export const BaseContainer = styled.View`
  flex: 1;
  padding: 26px;
  padding-top: ${Constants.statusBarHeight}px;
`;
