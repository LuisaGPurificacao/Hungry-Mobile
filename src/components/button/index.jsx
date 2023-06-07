import React from "react";
import { StyledButton, ButtonText } from "./styles";

const Button = (props) => {
  const { style, onPress, children } = props;

  return (
    <StyledButton style={style} onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
