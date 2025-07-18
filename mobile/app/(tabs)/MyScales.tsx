import { View, Text, FlatList } from "react-native";

import { useScale } from "@/src/hooks/useScale";

import { Header } from "@/src/components/Header";
import { ScaleCard } from "@/src/components/ScaleCard";

export default function MyScales() {
  const { scales, handleRemoveScale } = useScale();

  return (
    <View className="flex-1 bg-[#121214] items-center">
      <Header title="MINHAS ESCALAS" />
      <View className="max-w-[85%] w-full flex-1 mt-16">
        <Text className="text-white font-archivo_700 text-3xl mb-6">
          Minhas escalas
        </Text>
        <View className="space-y-6">
          <FlatList
            data={scales}
            scrollEnabled={false}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <ScaleCard
                  title={item.title}
                  periodScale={item.periodScale}
                  colaborators={item.colaborators.length}
                  onRemove={async () => handleRemoveScale(item.id, item.title)}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
