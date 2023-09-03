import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeProvider } from "../../theme";
export default function TabRoutesLayout() {
  return (
    <ThemeProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            marginBottom: 8,
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
            title: "Home",
            tabBarLabel: "",
            tabBarIcon: ({ size, color, focused }) => <MaterialIcons name="home" size={size} color={focused ? "#6c19de" : color} style={{ marginTop: 10 }} />,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            headerTitle: "none",
            tabBarLabel: "",
            tabBarIcon: ({ size, color, focused }) => <MaterialIcons name="person" size={size} color={focused ? "#6c19de" : color} style={{ marginTop: 10 }} />,
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: "Configurações",
            tabBarLabel: "",
            tabBarIcon: ({ size, color, focused }) => <MaterialIcons name="settings" size={size} color={focused ? "#6c19de" : color} style={{ marginTop: 10 }} />,
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
