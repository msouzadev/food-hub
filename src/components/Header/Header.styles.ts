import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  text-align: center;
  color: #111719;
`;
