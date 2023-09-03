import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "../../components";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="botão" />
      <Text style={{ fontSize: 44, fontWeight: "700" }}>Home</Text>
    </View>
  );
}
