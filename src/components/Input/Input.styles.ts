import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  color: #9796a1;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 12px;
`;
export const InputContainer = styled.View<{ backgroundColor?: string }>`
  flex-direction: row;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#ffffff"};
  border: 1px solid #eeeeee;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 18px;
  line-height: 18px;
  color: #111719;
  padding: 20px;
  flex: 1;
`;
