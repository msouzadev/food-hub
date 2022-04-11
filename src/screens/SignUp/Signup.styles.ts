import styled from "styled-components/native";

export const OrangeBall = styled.View`
  width: 181px;
  height: 181px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: ${181 / 2}px;
  position: absolute;
  left: 298px;
  top: -109px;
`;

export const PinkBall = styled.View`
  width: 165px;
  height: 165px;
  background-color: #ffece7;
  border-radius: ${165 / 2}px;
  position: absolute;
  left: -5px;
  top: -99px;
  z-index: 1;
`;
export const SecondOrangeBall = styled.View`
  width: 96px;
  height: 96px;
  border-radius: ${96 / 2}px;
  position: absolute;
  left: -46px;
  top: -21px;
  border: 36px solid #fe724c;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.semi};
  font-size: 36.4127px;
  line-height: 44px;
  color: #000000;
`;
export const SignUpContainer = styled.View`
  align-items: center;
  justify-content: center;
  /* flex: 1; */
`;
export const Line = styled.View`
  width: 89px;
  height: 0px;
  border: 1px solid rgba(179, 179, 179, 0.5);
`;

export const SignUpWith = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.medium};
  color: #5b5b5e;
  font-size: 16px;
  line-height: 16px;
  margin: 0 17px;
`;

export const SocialButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 16px 0;
`;

export const HasAccountText = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 16px;
  line-height: 16px;
  color: #5b5b5e;
  margin: 25px 0;
`;

export const LoginText = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.medium};
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.orange};
  text-decoration-line: underline;
`;
