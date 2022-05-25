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

export const Title = styled.Text`
  color: #131a38;
  font-size: 36px;
  line-height: 43px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  color: #616772;
  font-size: 17px;
  line-height: 27px;
  text-align: center;
  margin-top: 16px;
`;

export const CircleButton = styled.TouchableOpacity`
  width: 67px;
  height: 67px;
  border-radius: ${67 / 2}px;
  background-color: #fe724c;
  justify-content: center;
  align-items: center;
`;
