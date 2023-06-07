import React from "react";
import { StyledInput } from "./styles";

const Input = (props) => {
  const { style, value, onChangeText, placeholder, secureTextEntry, keyboardType } = props;

  return (
    <StyledInput
      style={style}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    ></StyledInput>
  );
};

export default Input;
