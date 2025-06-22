import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

interface HeaderProps {
  back?: boolean;
  title: string;
}

export function Header({ title, back }: HeaderProps) {
  return (
    <View className="w-full items-center justify-center bg-[#202024] py-12">
      <View className="relative max-w-[85%] w-full items-center justify-center mt-4">
        {back ? (
          <TouchableOpacity
            className="absolute left-0"
            onPress={() => router.back()}
          >
            <Feather name="arrow-left" size={18} color="#fff" />
          </TouchableOpacity>
        ) : null}
        <Text className="text-white font-archivo_700 text-base">{title}</Text>
      </View>
    </View>
  );
}
