import React, { forwardRef } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export const Button = forwardRef<TouchableOpacity, Props>(({ title, ...rest }, ref) => {
  return (
    <TouchableOpacity ref={ref} {...rest} style={{ width: 200, padding: 16, backgroundColor: "#8257e5", borderRadius: 7, alignItems: "center" }}>
      <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>{title}</Text>
    </TouchableOpacity>
  );
});
