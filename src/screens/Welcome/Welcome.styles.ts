import styled from "styled-components/native";

type TitleProps = {
  isOrange?: boolean;
};
export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
export const SkipButon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 55px;
  height: 32px;
  border-radius: 28px;
  padding: 10px 0;
`;

export const SkipButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  color: ${({ theme }) => theme.colors.orange};
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fontsFamily.bold};
  color: ${({ isOrange }) => (isOrange ? "#FE724C" : "#111719")};
  font-size: 45px;
  margin-bottom: 15px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.regular};
  font-size: 18px;
  color: #30384f;
  line-height: 27px;
`;

export const Line = styled.View`
  width: 89px;
  height: 0px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const SigninWith = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.medium};
  color: #ffffff;
  font-size: 16px;
  line-height: 16px;
  margin: 0 17px;
`;

export const SigninContainer = styled.View`
  align-items: center;
  justify-content: center;
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
  color: #ffffff;
  margin: 25px 0;
`;

export const SigninText = styled.Text`
  font-family: ${({ theme }) => theme.fontsFamily.medium};
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  text-decoration-line: underline;
`;
