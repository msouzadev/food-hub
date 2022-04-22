import styled from "styled-components/native";

export const IconContainer = styled.View`
  background: #ffffff;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;
  line-height: 16px;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  color: #ffffff;
`;
