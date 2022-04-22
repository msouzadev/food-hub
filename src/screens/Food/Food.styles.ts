import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  color: #000000;
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  font-size: 32px;
`;

export const Price = styled.Text`
  color: #000000;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 17px;
`;

export const CircleButton = styled.TouchableOpacity<{ isIncrement?: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  justify-content: center;
  align-items: center;
  ${({ isIncrement }) =>
    isIncrement &&
    css`
      background-color: ${({ theme }) => theme.colors.orange};
    `}
`;

export const ButtonText = styled.Text<{ isIncrement?: boolean }>`
  color: ${({ theme }) => theme.colors.orange};
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  font-size: 20px;
  ${({ isIncrement }) =>
    isIncrement &&
    css`
      color: white;
    `}
`;

export const Quantity = styled.Text`
  margin: 0 10px;
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  color: #000000;
`;

export const Description = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  color: #9796a1;
  margin-top: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  color: #000000;
`;

export const AddonName = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  color: #000000;
  margin-left: 20px;
  flex: 1;
`;
export const AddonPrice = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  color: #9796a1;
  margin-right: 10px;
`;
