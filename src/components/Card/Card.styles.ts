import styled from "styled-components/native";

export const Container = styled.View`
  width: 270px;
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

export const DescitionContainer = styled.View`
  padding: 15px;
`;

export const DeliveryDescription = styled.Text`
  margin-left: 6px;
  color: #5b5b5e;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
`;
