import Constants from "expo-constants";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Avatar = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: ${90 / 2}px;
`;

export const UserInfo = styled.View`
  margin-top: 10px;
`;
export const UserName = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: #000000;
  font-family: ${({ theme }) => theme.fontsFamily.semi};
`;

export const UserEmail = styled.Text`
  font-size: 12px;
  line-height: 12px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  color: #9796a1;
  margin-top: 2px;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const MenuItemName = styled.Text`
  color: #000000;
  font-size: 16px;
  line-height: 58px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
`;

export const MenuIcon = styled.Image`
  margin-right: 10px;
`;
