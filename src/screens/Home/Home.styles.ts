import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 30px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fontsFamily.bold};
  margin-top: 30px;
`;

export const FilterButton = styled.TouchableOpacity`
  background: #ffffff;
  border-radius: 10px;
  width: 51px;
  height: 51px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
