import { Text, View } from "react-native";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 44, fontWeight: "700" }}>Home</Text>

      {/* <Link href="/product/5" asChild>
        <Button title="ver produto" />
      </Link> */}

      <Button title="clica aqui" />
    </View>
  );
}
