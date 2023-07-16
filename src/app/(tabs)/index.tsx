import { Text, View } from "react-native";
import { Button } from "@/components/Button";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 44, fontWeight: "700" }}>Home</Text>

      <Link href="/product/00" asChild>
        <Button title="clica aqui" />
      </Link>
    </View>
  );
}
