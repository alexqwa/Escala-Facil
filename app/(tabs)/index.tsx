import clsx from "clsx";
import { useState } from "react";
import { router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { Header } from "@/src/components/Header";

export default function Home() {
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <View className="flex-1 items-center bg-[#121214]">
      <Header title="Gerar Escala" />
      <View className="max-w-[85%] w-full flex-1 mt-20">
        <Text className="text-white font-poppins_500 text-xl">
          Faça sua escala sem complicações.{"\n"}Rápido, prático e de forma
          {"\n"}inteligente!
        </Text>
        <View className="space-y-4 mt-8">
          <View className="space-y-2">
            <Text className="text-white font-archivo_600 text-sm pl-2">
              Titulo
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              keyboardType="default"
              placeholderTextColor="#8d8d99"
              className="w-full h-14 bg-[#202024] rounded-lg border border-[#323238] px-4 text-[#E1E1E6] font-archivo_600"
              placeholder="Nome da sua escala..."
            />
          </View>
          <View className="space-y-2">
            <Text className="text-white font-archivo_600 text-sm pl-2">
              Mês
            </Text>
            <TextInput
              value={month.trim()}
              onChangeText={setMonth}
              keyboardType="number-pad"
              placeholderTextColor="#8d8d99"
              className="w-full h-14 bg-[#202024] rounded-lg border border-[#323238] px-4 text-[#E1E1E6] font-archivo_600"
              placeholder="Digite o mês de referência..."
            />
          </View>
          <View className="space-y-2">
            <Text className="text-white font-archivo_600 text-sm pl-2">
              Ano
            </Text>
            <TextInput
              value={year.trim()}
              onChangeText={setYear}
              keyboardType="number-pad"
              placeholderTextColor="#8d8d99"
              className="w-full h-14 bg-[#202024] rounded-lg border border-[#323238] px-4 text-[#E1E1E6] font-archivo_600"
              placeholder="Digite o ano de referência..."
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={!name || !month || !year}
          onPress={() =>
            router.push({
              pathname: "/editables/[id]",
              params: { month: month, year: year, name: name },
            })
          }
          className={clsx(
            "w-full mt-6 h-14 bg-[#f7dd43] rounded-lg items-center justify-center",
            {
              ["opacity-70"]: !name || !month || !year,
            }
          )}
        >
          <Text className="text-black font-archivo_700 text-base">
            Gerar Escala
          </Text>
        </TouchableOpacity>
        <Text className="text-[#c4c4cc] font-poppins_400 text-sm mt-6 text-center">
          Após gerar sua escala, você será redirecionado{"\n"}para tela onde
          você poderá edita-la.
        </Text>
      </View>
    </View>
  );
}
