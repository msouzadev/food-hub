import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface CategoryProps {
  isSelected?: boolean;
}
export const Container = styled.TouchableOpacity<CategoryProps>`
  width: 58.57px;
  height: 98px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.orange : "#FFFFFF"};
  border-radius: 100px;
  margin-right: 20px;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
`;

export const IconContainer = styled(Animated.View)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  background-color: #ffffff;
`;

export const Name = styled.Text<CategoryProps>`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#67666D")};
  margin-bottom: 20px;
`;
