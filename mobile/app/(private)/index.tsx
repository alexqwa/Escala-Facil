import { useEffect } from "react";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";

import { useCalaborators } from "@/src/hooks/useCalaborators";

export default function Home() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const { scales, loadScales } = useCalaborators();
  const height = Dimensions.get("window").height * 0.4;

  useEffect(() => {
    loadScales();
  }, [scales]);

  return (
    <View className="flex-1 items-center bg-background">
      <View style={{ height: height }} className="bg-muted w-full pt-20 px-6">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-4">
            <Image
              source={{ uri: user?.imageUrl }}
              className="bg-card w-12 h-12 rounded-full"
            />
            <Text
              allowFontScaling={false}
              className="text-foreground font-archivo_600 text-base"
            >
              {user?.fullName}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => signOut()}
            className="w-12 h-12 rounded-lg bg-card flex items-center justify-center"
          >
            <Feather name="power" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full max-w-[85%] flex-1 py-10">
        <View className="space-y-1 mb-8">
          <Text
            allowFontScaling={false}
            className="text-foreground text-2xl font-archivo_400"
          >
            Seja bem-vindo.
          </Text>
          <Text
            allowFontScaling={false}
            className="text-foreground text-2xl font-archivo_700"
          >
            O que deseja fazer?
          </Text>
        </View>
        <View className="flex flex-row items-center justify-center gap-3">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/createScale")}
            className="flex-1 p-6 bg-muted rounded-2xl space-y-6"
          >
            <Feather name="plus-circle" size={30} color="#ededed" />
            <Text
              allowFontScaling={false}
              className="text-base leading-tight text-foreground font-archivo_700"
            >
              Criar{"\n"}Escala
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/scales")}
            className="flex-1 p-6 bg-muted rounded-2xl space-y-6"
          >
            <Feather name="calendar" size={30} color="#ededed" />
            <Text
              allowFontScaling={false}
              className="text-base leading-tight text-foreground font-archivo_700"
            >
              Minhas{"\n"}Escalas
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          allowFontScaling={false}
          className="text-foreground mt-8 leading-snug font-archivo_600 text-base"
        >
          {scales.length <= 1
            ? `Total de ${scales.length} escala${"\n"}já criada`
            : `Total de ${scales.length} escalas${"\n"}já criadas`}
        </Text>
      </View>
    </View>
  );
}
