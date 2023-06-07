import React from "react";
import { StyledLink, LinkButton } from "./styles";

const Link = (props) => {
  const { style, children, onPress } = props;

  return (
    <LinkButton style={style} onPress={onPress}>
      <StyledLink>{children}</StyledLink>
    </LinkButton>
  );
};

export default Link;
