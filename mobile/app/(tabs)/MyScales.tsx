import { router } from "expo-router";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

import { useScale } from "@/src/hooks/useScale";

import { Header } from "@/src/components/Header";
import { ScaleCard } from "@/src/components/ScaleCard";

export default function MyScales() {
  const { scales, handleRemoveScale, loading } = useScale();

  return (
    <View className="flex-1 bg-[#121214] items-center">
      <Header title="MINHAS ESCALAS" />
      <View className="max-w-[85%] w-full flex-1 mt-16">
        <Text className="text-white font-archivo_700 text-3xl mb-6">
          Minhas escalas
        </Text>
        <View className="space-y-6 flex-1">
          {loading ? (
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
                        params: {
                          id: item.id.toString(),
                          edit: "true",
                        },
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
