import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const RestaurantLogoContainer = styled(Animated.View)`
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 50px;
  align-self: center;
  margin-top: -40px;
  justify-content: center;
  align-items: center;
`;

export const RestaurantName = styled.Text`
  text-align: center;
  color: #000000;
  font-size: 20px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fontsFamily.semi};
`;

export const RestaurantAddress = styled.Text`
  color: #9796a1;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  margin-top: 6px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
`;

export const DeliveryDescription = styled.Text`
  margin-left: 6px;
  color: #5b5b5e;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
`;

export const Rating = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  color: #000000;
  margin-right: 10px;
`;

export const ReviewCount = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
margin-right:8px
  color: #9796a1;
`;

export const SeeReviewText = styled.Text`
  color: ${({ theme }) => theme.colors.orange};
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 13px;
`;
