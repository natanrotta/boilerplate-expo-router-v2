import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
};

export function Button({ title }: Props) {
  return (
    <TouchableOpacity style={{ width: 200, padding: 16, backgroundColor: "#8257e5", borderRadius: 7, alignItems: "center" }}>
      <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>{title}</Text>
    </TouchableOpacity>
  );
}
