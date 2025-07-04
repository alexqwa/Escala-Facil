import { useCallback } from "react";
import { router } from "expo-router";
import { View, FlatList, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { useScale } from "@/src/hooks/useScale";

import { Header } from "@/src/components/Header";
import { ScaleCard } from "@/src/components/ScaleCard";

export default function MyScales() {
  const { scales, getAllScales, deleteScale } = useScale();

  useFocusEffect(
    useCallback(() => {
      getAllScales();
    }, [])
  );

  return (
    <View className="flex-1 bg-[#121214] items-center">
      <Header title="MINHAS ESCALAS" />
      <View className="max-w-[85%] w-full flex-1 mt-16">
        <Text className="text-white font-archivo_700 text-3xl mb-6">
          Minhas Escalas
        </Text>
        <View className="space-y-6">
          <FlatList
            data={scales}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <ScaleCard
                  onPress={() =>
                    router.replace({
                      pathname: "/editables/[id]",
                      params: { id: item.id, editing: JSON.stringify(true) },
                    })
                  }
                  title={item.title}
                  period={item.month}
                  colaborators={item.colaborators.length}
                  deleteScale={() => deleteScale(item.id)}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
