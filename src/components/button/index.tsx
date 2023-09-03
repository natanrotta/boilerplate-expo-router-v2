import React, { forwardRef } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { TouchableOpacityStyled, TextStyled } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export const Button = forwardRef<TouchableOpacity, Props>(({ title, ...rest }, ref) => {
  return (
    <TouchableOpacityStyled ref={ref} {...rest}>
      <TextStyled>{title}</TextStyled>
    </TouchableOpacityStyled>
  );
});
