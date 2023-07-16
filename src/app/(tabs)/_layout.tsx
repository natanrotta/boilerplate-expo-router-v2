import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
export default function TabRoutesLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#d3d3d3",
          position: "absolute",
          marginBottom: 10,
          height: 50,
          marginRight: 40,
          marginLeft: 40,
          borderRadius: 20,
          paddingBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarLabel: "",
          tabBarIcon: ({ size, color, focused }) => <MaterialIcons name="home" size={size} color={focused ? "orange" : color} style={{ marginTop: 10 }} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerTitle: "none",
          tabBarLabel: "",
          tabBarIcon: ({ size, color, focused }) => <MaterialIcons name="person" size={size} color={focused ? "orange" : color} style={{ marginTop: 10 }} />,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarLabel: "",
          tabBarIcon: ({ size, color, focused }) => <MaterialIcons name="settings" size={size} color={focused ? "orange" : color} style={{ marginTop: 10 }} />,
        }}
      />
    </Tabs>
  );
}
