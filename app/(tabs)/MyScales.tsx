import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Header } from "@/src/components/Header";

export default function MyScales() {
  return (
    <View className="flex-1 bg-[#121214] items-center">
      <Header title="Minhas escalas" />
      <View className="max-w-[85%] w-full flex-1 mt-20">
        <View className="space-y-6">
          <View className="bg-[#202024] w-full py-4 px-6 rounded-lg border border-[#323238]">
            <View className="flex-row items-center justify-between">
              <View className="flex-col space-y-3">
                <Text className="text-[#c4c4cc] font-archivo_700 text-base">
                  Escala: Seca Doce
                </Text>
                <View className="flex-row items-center space-x-3">
                  <Feather name="clock" size={18} color="#fff" />
                  <Text className="text-base font-archivo_600 text-[#c4c4cc]">
                    27/07/2025 - 24/08/2025
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="bg-[#121214] p-4 rounded-lg"
              >
                <Feather name="edit-2" color="#c4c4cc" size={18} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-[#202024] w-full py-4 px-6 rounded-lg border border-[#323238]">
            <View className="flex-row items-center justify-between">
              <View className="flex-col space-y-3">
                <Text className="text-[#c4c4cc] font-archivo_700 text-base">
                  Escala: Seca Doce
                </Text>
                <View className="flex-row items-center space-x-3">
                  <Feather name="clock" size={18} color="#fff" />
                  <Text className="text-base font-archivo_600 text-[#c4c4cc]">
                    27/07/2025 - 24/08/2025
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="bg-[#121214] p-4 rounded-lg"
              >
                <Feather name="edit-2" color="#c4c4cc" size={18} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-[#202024] w-full py-4 px-6 rounded-lg border border-[#323238]">
            <View className="flex-row items-center justify-between">
              <View className="flex-col space-y-3">
                <Text className="text-[#c4c4cc] font-archivo_700 text-base">
                  Escala: Seca Doce
                </Text>
                <View className="flex-row items-center space-x-3">
                  <Feather name="clock" size={18} color="#fff" />
                  <Text className="text-base font-archivo_600 text-[#c4c4cc]">
                    27/07/2025 - 24/08/2025
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="bg-[#121214] p-4 rounded-lg"
              >
                <Feather name="edit-2" color="#c4c4cc" size={18} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-[#202024] w-full py-4 px-6 rounded-lg border border-[#323238]">
            <View className="flex-row items-center justify-between">
              <View className="flex-col space-y-3">
                <Text className="text-[#c4c4cc] font-archivo_700 text-base">
                  Escala: Seca Doce
                </Text>
                <View className="flex-row items-center space-x-3">
                  <Feather name="clock" size={18} color="#fff" />
                  <Text className="text-base font-archivo_600 text-[#c4c4cc]">
                    27/07/2025 - 24/08/2025
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="bg-[#121214] p-4 rounded-lg"
              >
                <Feather name="edit-2" color="#c4c4cc" size={18} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
