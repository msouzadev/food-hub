import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  font-size: 18px;
  line-height: 18px;
  color: #000000;
  text-align: left;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 12px;
  line-height: 12px;
  color: #9796a1;
  text-align: left;
  margin-top: 10px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 15.4311px;
  line-height: 18px;
  color: #fe724c;
  margin-top: 15px;
`;
export const RemoveButton = styled.TouchableOpacity`
  margin-bottom: 30px;
  align-items: flex-end;
  /* align-self: end; */
`;
