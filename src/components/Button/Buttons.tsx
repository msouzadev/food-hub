import React from "react";
import { Container, Title } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const { title, icon, variant, withShadow, color, ...otherProps } = props;
  return (
    <Container
      style={
        withShadow && {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }
      }
      {...{ variant, color }}
      {...otherProps}
      hasIcon={!!icon}
    >
      {icon && icon}
      <Title {...{ variant, buttonColor: color }} hasIcon={!!icon}>
        {title}
      </Title>
    </Container>
  );
};

export default Button;
