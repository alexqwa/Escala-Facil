import { useEffect } from "react";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as NavigationBar from "expo-navigation-bar";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import {
  Text,
  View,
  Platform,
  StatusBar,
  ActivityIndicator,
} from "react-native";
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
import { tokenCache } from "@/src/storage/tokenCache";

SplashScreen.preventAutoHideAsync();

function AuthState() {
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.replace({ pathname: "/(tabs)" });
    } else {
      router.replace({ pathname: "/(auth)" });
    }
  }, [isSignedIn]);

  return isLoaded ? (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="creation/Scale" />
    </Stack>
  ) : (
    <View className="my-auto items-center justify-center flex-1 space-y-2">
      <ActivityIndicator size="small" color="#fff" />
      <Text className="text-white text-center text-base font-archivo_700 ">
        Carregando escalas...
      </Text>
    </View>
  );
}

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
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <AuthState />
      <StatusBar translucent barStyle={"light-content"} />
    </ClerkProvider>
  );
}
