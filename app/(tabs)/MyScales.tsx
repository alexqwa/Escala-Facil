import { useEffect } from "react";
import { View, FlatList, Text } from "react-native";

import { useScales } from "@/src/hooks/useScales";

import { Header } from "@/src/components/Header";
import { ScaleCard } from "@/src/components/ScaleCard";

export default function MyScales() {
  const { loadScales, scales, deleteScale } = useScales();

  useEffect(() => {
    loadScales();
  }, [scales]);

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
            keyExtractor={(item, index) => String(index)}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({ item, index }) => {
              return (
                <ScaleCard
                  key={index}
                  title={item.title}
                  timestamp={item.month}
                  quantCollaborators={item.collaborators.length}
                  deleteScale={() => deleteScale(index)}
                  editScale={() => console.log("Edição de escala")}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
