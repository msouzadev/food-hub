import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  /* width: 270px; */
  background: #ffffff;
  border-radius: 15px;
  margin-right: 30px;
`;

export const Title = styled.Text`
  font-size: 15px;
  line-height: 15px;
  color: #000000;
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  margin: 10px 0;
`;

export const DescriptionContainer = styled.View`
  padding: 15px;
`;

export const DeliveryDescription = styled.Text`
  margin-left: 6px;
  color: #5b5b5e;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
`;

export const Badge = styled.View<{ isFood?: boolean }>`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 6px;

  justify-content: center;
  align-items: center;
  max-width: 75px;
  flex-direction: row;
  ${({ isFood }) =>
    isFood &&
    css`
      position: absolute;
      bottom: -10px;
      left: 10px;
    `}
`;
export const Currency = styled.Text`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 10px;
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  color: #000000;
  font-size: 20px;
`;
export const Description = styled.Text`
  font-size: 12px;
  line-height: 12px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  color: #9796a1;
`;

export const FavoriteContainer = styled.TouchableOpacity<{
  isFavorited?: boolean;
}>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  justify-content: center;
  align-items: center;
  ${({ isFavorited, theme }) =>
    isFavorited &&
    css`
      background-color: ${theme.colors.orange};
    `}
`;

export const Rating = styled.Text`
  font-size: 11.6949px;
  line-height: 12px;
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  color: #000000;
  margin-left: 2px;
`;

export const ReviewCount = styled.Text`
  font-size: 8.18644px;
  line-height: 8px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};

  color: #9796a1;
`;
