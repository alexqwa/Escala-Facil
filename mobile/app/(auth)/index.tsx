import * as Linking from "expo-linking";
import { useSSO } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { View, Text, TouchableOpacity } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function Auth() {
  const { startSSOFlow } = useSSO();

  async function onGoogleSignIn() {
    try {
      const redirectUrl = Linking.createURL("(tabs)");

      const oAuthFlow = await startSSOFlow({
        strategy: "oauth_google",
        redirectUrl,
      });

      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
      } else {
        console.log("Login cancelled");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-[#121214]">
      <View className="max-w-[85%] w-full">
        <View className="bg-[#202024] p-8 rounded-2xl items-center shadow-2xl shadow-black">
          <View className="bg-[#121214] w-20 h-20 items-center justify-center rounded-3xl">
            <Ionicons name="calendar-number-outline" size={32} color="#fff" />
          </View>
          <View className="space-y-2 items-center mt-4">
            <Text className="text-white font-poppins_700 text-xl">
              Escala Fácil
            </Text>
            <Text className="text-white/80 font-poppins_400 text-sm text-center">
              Organize suas escalas de trabalho em segundos. Entre com sua conta
              Google.
            </Text>
          </View>
          <View className="flex-row items-center mt-8">
            <View className="h-[1px] bg-[#323238] flex-1" />
            <Text className="mx-4 text-white/70 text-sm font-poppins_500">
              Somente Google
            </Text>
            <View className="h-[1px] bg-[#323238] flex-1" />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onGoogleSignIn}
            className="bg-[#121214] w-full mt-4 rounded-lg flex-row items-center justify-center space-x-3 py-5"
          >
            <Ionicons name="logo-google" size={20} color="#fff" />
            <Text className="text-white/80 font-archivo_700 text-base">
              Entrar com Google
            </Text>
          </TouchableOpacity>
          <Text className="text-white/80 font-poppins_400 text-sm text-center mt-4">
            Ao entrar, você aceita os{" "}
            <Text className="underline">Termos de Serviço</Text> e a{" "}
            <Text className="underline">Política de Privacidade</Text> do app.
          </Text>
        </View>
      </View>
    </View>
  );
}
