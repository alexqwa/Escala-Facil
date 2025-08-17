import { useEffect } from "react";
import { useFonts } from "expo-font";
import { router, Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as NavigationBar from "expo-navigation-bar";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Platform, StatusBar, ActivityIndicator } from "react-native";
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
    if (isLoaded) {
      router.replace({ pathname: isSignedIn ? "/(tabs)" : "/(auth)" });
    }
  }, [isLoaded, isSignedIn]);
  return isLoaded ? (
    <Slot />
  ) : (
    <ActivityIndicator
      size="small"
      color="#fff"
      className="flex-1 items-center justify-center"
    />
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
