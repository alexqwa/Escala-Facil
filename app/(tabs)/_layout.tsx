import { Feather } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "@/app/(tabs)/index";
import MyScales from "@/app/(tabs)/MyScales";

const Tab = createMaterialTopTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: {
          height: 140,
          paddingBottom: 40,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#202024",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
          height: 0,
        },
        tabBarActiveTintColor: "#F7DD43",
        tabBarInactiveTintColor: "#8D8D99",
        tabBarItemStyle: {
          flexDirection: "row",
        },
        tabBarLabelStyle: {
          fontSize: 16,
          marginLeft: 16,
          fontFamily: "Archivo_700Bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => {
            return <Feather size={18} name="plus-circle" color={color} />;
          },
          tabBarPressColor: "transparent",
        }}
        component={Home}
      />
      <Tab.Screen
        name="MyScales"
        options={{
          title: "Minhas escalas",
          tabBarIcon: ({ color }) => {
            return <Feather size={18} name="map" color={color} />;
          },
          tabBarPressColor: "transparent",
        }}
        component={MyScales}
      />
    </Tab.Navigator>
  );
}
