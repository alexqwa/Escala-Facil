import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as NavigationBar from "expo-navigation-bar";
import {
  Archivo_400Regular,
  Archivo_600SemiBold,
  Archivo_700Bold,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import "@/src/lib/dayjs";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setStyle("light");
    }

    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View className="flex-1 bg-[#121214]">
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#121214",
          },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <StatusBar translucent style="light" />
      </Stack>
    </View>
  );
}
