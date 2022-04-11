import styled from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  color: #9796a1;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 12px;
`;
export const InputContainer = styled.View`
  flex-direction: row;
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 15px 20px 45px rgba(233, 233, 233, 0.25);
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 18px;
  line-height: 18px;
  color: #111719;
  padding: 25px 20px;
  flex: 1;
`;
