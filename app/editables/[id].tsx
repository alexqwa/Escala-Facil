import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Header } from "@/src/components/Header";

export default function EditablePage() {
  const { name, month, year } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center bg-[#121214]">
      <Header back title="Editar escala" />
      <View className="max-w-[85%] w-full flex-1 mt-20">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60 }}
        >
          <View className="flex-col space-y-4">
            <View>
              <Text className="block text-sm font-archivo_700 text-white mb-2 pl-2">
                Título
              </Text>
              <TextInput
                value={name.toString()}
                className="input-custom w-full bg-[#202024] h-14 rounded-lg px-4 border-2 border-[#202024] text-[#E1E1E6] font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
                placeholder="Nome da escala..."
                placeholderTextColor="#c6c6cc"
                cursorColor="#fff"
              />
            </View>
            <View className="flex-row w-full space-x-4">
              <View className="flex-1">
                <Text className="block text-sm font-archivo_700 text-white mb-2 pl-2">
                  Mês
                </Text>
                <TextInput
                  value={month.toString()}
                  className="input-custom w-full bg-[#202024] h-14 rounded-lg px-4 border-2 border-[#202024] text-[#E1E1E6] font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
                  placeholder="Mês de referência..."
                  placeholderTextColor="#c6c6cc"
                  cursorColor="#fff"
                />
              </View>

              <View className="flex-1">
                <Text className="block text-sm font-archivo_700 text-white mb-2 pl-2">
                  Ano
                </Text>
                <TextInput
                  value={year.toString()}
                  className="input-custom w-full bg-[#202024] h-14 rounded-lg px-4 border-2 border-[#202024] text-[#E1E1E6] font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
                  placeholder="Ano de referência..."
                  placeholderTextColor="#c6c6cc"
                  cursorColor="#fff"
                />
              </View>
            </View>
            <View>
              <Text className="block text-sm font-archivo_700 text-white mb-2 pl-2">
                Período da escala
              </Text>
              <View className="w-full bg-[#202024] h-14 rounded-lg items-center justify-center text-[#E1E1E6] font-archivo_600">
                <Text className="text-[#c6c6cc] font-archivo_700 text-base">
                  27/07/2025 - 24/08/2025
                </Text>
              </View>
            </View>
            <View>
              <Text className="block text-sm font-archivo_700 text-white mb-2 pl-2">
                Pessoas
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                className="w-full bg-[#202024] h-14 rounded-lg items-center justify-center text-[#E1E1E6] font-archivo_600"
              >
                <View className="flex-row items-center justify-center space-x-2">
                  <Feather name="plus-circle" size={18} color="#fff" />
                  <Text className="text-white font-archivo_700 text-base">
                    Adicionar pessoa
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="bg-[#202024] h-[1px] my-6 w-[80%] self-center" />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/(tabs)")}
            className="bg-green-500 h-14 rounded-lg items-center justify-center"
          >
            <Text className="text-white text-base font-archivo_700">
              Salvar informações
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
