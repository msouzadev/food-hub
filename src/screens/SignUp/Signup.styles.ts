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
