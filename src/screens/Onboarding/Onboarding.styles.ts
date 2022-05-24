import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const CircleContainer = styled.View`
  width: 310px;
  height: 310px;
  border: 1px solid #2dbc48;
  border-radius: ${310 / 2}px;
  align-items: center;
  position: relative;
`;

export const DotsContainer = styled.View`
  flex-direction: row;
  margin-bottom: auto;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
