import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 18px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fontsFamily.medium};
  color: #111719;
`;

export const ViewAllButton = styled.TouchableOpacity``;

export const ViewAllText = styled.Text`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 13px;
  line-height: 13px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
`;
