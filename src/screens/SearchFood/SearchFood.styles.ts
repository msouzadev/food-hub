import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 18px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  text-align: center;
  color: #111719;
`;

export const Avatar = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 10px;
`;

export const ListTitle = styled.Text`
  font-size: 31px;
  line-height: 36px;
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  color: #000000;
  text-align: left;
`;
