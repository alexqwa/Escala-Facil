import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Platform, Pressable } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 140,
          borderTopWidth: 0,
        },
        tabBarActiveBackgroundColor: "#202024",
        tabBarInactiveBackgroundColor: "#202024",
        tabBarActiveTintColor: "#F7DD43",
        tabBarInactiveTintColor: "#8D8D99",
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          marginLeft: 30,
          fontSize: 16,
          fontFamily: "Archivo_700Bold",
          marginBottom: Platform.OS === "ios" ? 30 : null,
        },
        tabBarIconStyle: {
          marginBottom: Platform.OS === "ios" ? 30 : null,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Gerar escala",
          tabBarIcon: ({ color }) => (
            <Feather size={18} name="plus-circle" color={color} />
          ),
          tabBarButton: (props) => (
            <Pressable
              {...(props as React.ComponentProps<typeof Pressable>)}
              android_ripple={{ color: "transparent" }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MyScales"
        options={{
          title: "Minhas escalas",
          tabBarIcon: ({ color }) => (
            <Feather size={18} name="map" color={color} />
          ),
          tabBarButton: (props) => (
            <Pressable
              {...(props as React.ComponentProps<typeof Pressable>)}
              android_ripple={{ color: "transparent" }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
