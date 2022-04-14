import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DrawerButton = styled.TouchableOpacity`
  background: #ffffff;
  border-radius: 10px;
  width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;
`;

export const AddressContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const DeliverTo = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 16px;
  line-height: 20px;
  color: #111719;
`;
export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 16px;
  line-height: 20px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.orange};
`;

export const Avatar = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 10px;
`;
