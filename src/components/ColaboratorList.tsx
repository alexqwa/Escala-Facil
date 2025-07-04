import React from "react";
import { Feather } from "@expo/vector-icons";
import { FlatList, Text, View, TouchableOpacity } from "react-native";

interface ColaboratorItem {
  name: string;
  isSun: boolean;
}

interface ColaboratorListProps {
  colaborators: ColaboratorItem[];
  onRemove: (name: string) => void;
}

export function ColaboratorList({
  colaborators,
  onRemove,
}: ColaboratorListProps) {
  return (
    <FlatList
      data={colaborators}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View className="w-full overflow-hidden flex-row h-14 rounded-xl mb-2 bg-[#202024] divide-x-[1px] divide-[#323238] border border-[#323238]">
          <View className="flex-1 px-4 justify-center">
            <Text className="text-white font-archivo_600 text-base">
              {item.name}
            </Text>
          </View>
          <View className="w-12 items-center justify-center">
            <Feather
              name={item.isSun ? "sun" : "moon"}
              size={18}
              color="#fff"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onRemove(item.name)}
            className="w-12 items-center justify-center"
          >
            <Feather name="trash-2" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
