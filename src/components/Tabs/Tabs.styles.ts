import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  border: 1px solid #f2eaea;
  border-radius: 27.5px;
  /* padding: 20px 8px; */
  flex-direction: row;
  position: relative;
  justify-content: space-between;
`;

export const Tab = styled(Animated.View)<{ isActive: boolean }>`
  position: absolute;
  padding: 17px 0;
  border-radius: 23.5px;
  margin-top: 4px;
  margin-left: 4px;
  height: 47px;
  ${({ isActive }) =>
    isActive &&
    css`
      background: #fe724c;
    `}/* right:3px; */
`;

export const Label = styled.Text<{ isActive: boolean }>`
  font-size: 14px;
  line-height: 14px;
  color: black;
  text-align: center;
  ${({ isActive }) =>
    isActive &&
    css`
      color: white;
    `}
`;
