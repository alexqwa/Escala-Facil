import { useEffect } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { useScales } from "@/src/hooks/useScales";
import { useAuth, useUser } from "@clerk/clerk-expo";

import { Header } from "@/src/components/Header";
import { ScaleCard } from "@/src/components/ScaleCard";

export default function MyScales() {
  const { scales, fetchScales, handleRemoveScale, loadingScale } = useScales(
    "",
    "",
    ""
  );
  const { user } = useUser();
  const { signOut } = useAuth();

  useEffect(() => {
    fetchScales();
  }, []);

  return (
    <View className="flex-1 bg-[#121214] items-center">
      <Header title="MINHAS ESCALAS" />
      <View className="max-w-[85%] w-full flex-1 mt-16">
        <View className="bg-[#202024] p-4 rounded-xl flex-row items-center justify-between mb-6">
          <View className="flex-row items-center">
            <Image
              source={{ uri: user?.imageUrl }}
              className="w-12 h-12 rounded-xl"
            />
            <Text className="text-white font-poppins_600 text-base ml-3">
              {user?.firstName}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => signOut()}
            className="bg-[#121214] rounded-xl w-12 h-12 items-center justify-center"
          >
            <Ionicons name="power" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text className="text-white font-archivo_700 text-3xl mb-6">
          Minhas escalas
        </Text>
        <View className="space-y-6 flex-1">
          {loadingScale ? (
            <View className="my-auto items-center justify-center space-y-2">
              <ActivityIndicator size="small" color="#fff" />
              <Text className="text-white text-center text-base font-archivo_700 ">
                Carregando escalas...
              </Text>
            </View>
          ) : (
            <FlatList
              data={scales}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <ScaleCard
                    key={item.id}
                    title={item.title}
                    periodScale={item.periodScale}
                    colaborators={item.colaborators.length}
                    onPress={() =>
                      router.push({
                        pathname: "/[id]",
                        params: { id: item.id },
                      })
                    }
                    onRemove={async () =>
                      handleRemoveScale(item.id, item.title)
                    }
                  />
                );
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}
