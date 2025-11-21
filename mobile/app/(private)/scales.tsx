import { useEffect } from "react";
import { router } from "expo-router";
import { View, FlatList } from "react-native";

import { Header } from "@/src/components/Header";
import { ScaleCard } from "@/src/components/ScaleCard";

import { useCalaborators } from "@/src/hooks/useCalaborators";

export default function Scales() {
  const { loadScales, scales, onRemoveScale } = useCalaborators();

  useEffect(() => {
    loadScales();
  }, [scales]);

  return (
    <View className="flex-1 items-center bg-background">
      <Header title="MINHAS ESCALAS" back />
      <View className="max-w-[85%] flex-1 w-full">
        <FlatList
          data={scales}
          contentContainerStyle={{ paddingVertical: 30 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ScaleCard
              key={item.id}
              title={item.title}
              period={item.periodScale}
              onDelete={() => onRemoveScale(item.id)}
              onEdit={() =>
                router.push({
                  pathname: "/(private)/[id]",
                  params: { id: item.id },
                })
              }
            />
          )}
        />
      </View>
    </View>
  );
}
