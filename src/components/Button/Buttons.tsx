import React from "react";
import { Container, Title } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const { title, icon, variant, ...otherProps } = props;
  return (
    <Container {...{ variant }} {...otherProps} hasIcon={!!icon}>
      {icon && icon}
      <Title {...{ variant }} hasIcon={!!icon}>
        {title}
      </Title>
    </Container>
  );
};

export default Button;
