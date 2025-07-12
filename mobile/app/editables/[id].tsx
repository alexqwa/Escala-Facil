import clsx from "clsx";
import dayjs from "dayjs";
import { Feather } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  Alert,
  Platform,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useScale } from "@/src/hooks/useScale";

import { Form } from "@/src/components/Form";
import { Header } from "@/src/components/Header";
import { Colaborator } from "@/src/components/Colaborator";

interface ColaboratorItem {
  name: string;
  isSun: boolean;
}

interface DayItem {
  id: number;
  day: string;
}

export default function EditablePage() {
  const { id, editing, dateMonth, dateYear } = useLocalSearchParams();
  const { saveScale, updateScale, currentScale, getScaleById } = useScale();

  const [days, setDays] = useState<DayItem[]>([]);
  const [year, setYear] = useState(dateYear);
  const [month, setMonth] = useState(dateMonth);
  const [title, setTitle] = useState(id.toString());
  const [isSunShift, setIsSunShift] = useState(true);
  const [formattedPeriod, setFormattedPeriod] = useState("");
  const [colaboratorName, setColaboratorName] = useState("");
  const [showColaboratorInput, setShowColaboratorInput] = useState(false);
  const [colaborators, setColaborators] = useState<ColaboratorItem[]>([]);

  const handleAddColaborator = () => {
    if (colaboratorName.trim()) {
      setColaborators([
        ...colaborators,
        { name: colaboratorName, isSun: isSunShift },
      ]);
    }
    setShowColaboratorInput(false);
    setColaboratorName("");
    setIsSunShift(true);
  };

  const handleSaveScale = async () => {
    try {
      const newScale = {
        title,
        month: Array.isArray(month) ? month[0] : month,
        year: Array.isArray(year) ? year[0] : year,
        periodScale: formattedPeriod,
        colaborators,
      };
      await saveScale(newScale);
      setTitle("");
      setYear(dateYear);
      setMonth(dateMonth);
      setColaborators([]);
    } catch (error) {
      console.error("Error saving scale:", error);
    } finally {
      router.replace("/(tabs)/MyScales");
    }
  };

  const handleUpdateScale = async () => {
    if (!currentScale) return;
    try {
      await updateScale({
        ...currentScale,
        title,
        month: Array.isArray(month) ? month[0] : month,
        year: Array.isArray(year) ? year[0] : year,
        periodScale: formattedPeriod,
        colaborators,
      });
      Alert.alert(
        "Alerta!",
        "As informações da sua escala foram alteradas com sucesso!"
      );
    } catch (err) {
      console.error("Error updating scale:", err);
    } finally {
      router.replace("/MyScales");
    }
  };

  const handleRemoveColaborator = (colabName: string) => {
    setColaborators((prev) => prev.filter((c) => c.name !== colabName));
  };

  useEffect(() => {
    if (editing) {
      async function handleLoadScale(id: string) {
        const scale = await getScaleById(id);
        if (scale) {
          setYear(scale.year);
          setTitle(scale.title);
          setMonth(scale.month);
          setColaborators(scale.colaborators);
          setFormattedPeriod(scale.periodScale);
        }
      }

      handleLoadScale(id.toString());
    }
  }, []);

  return (
    <View className="flex-1 items-center bg-[#121214]">
      <Header
        back={Boolean(!editing)}
        title={Boolean(editing) ? "EDITAR ESCALA" : "GERAR ESCALA"}
      />
      <KeyboardAvoidingView
        className="max-w-[85%] w-full flex-1"
        behavior={Platform.OS === "ios" ? "position" : "padding"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 60, paddingBottom: 100 }}
        >
          <View className="space-y-4">
            <Form
              title={title}
              year={Array.isArray(year) ? year[0] : year}
              month={Array.isArray(month) ? month[0] : month}
              onChangeTitle={setTitle}
              onChangeMonth={setMonth}
              onChangeYear={setYear}
            />
            <View className="space-y-2">
              <Text className="block text-sm font-archivo_700 text-white ml-2">
                Período da escala
              </Text>
              <View className="w-full bg-[#202024] h-14 rounded-xl px-4 justify-center">
                <Text className="text-[#E1E1E6] font-archivo_600 text-base">
                  {(() => {
                    // Verifica se month é um array e obtém o valor do mês
                    const monthValue = Array.isArray(month)
                      ? Number(month[0])
                      : Number(month);
                    // Ajusta o valor do mês para o formato do dayjs (Janeiro = 0)
                    const currentMonth = dayjs().month(monthValue - 1); // Subtrai 1 para ajustar
                    const nextMonth = currentMonth.add(1, "month");
                    // Formata os nomes dos meses e capitaliza a primeira letra
                    return (
                      currentMonth.format("MMMM").charAt(0).toUpperCase() +
                      currentMonth.format("MMMM").slice(1) +
                      " - " +
                      nextMonth.format("MMMM").charAt(0).toUpperCase() +
                      nextMonth.format("MMMM").slice(1)
                    );
                  })()}
                </Text>
              </View>
            </View>
            <View>
              <View className="flex-row justify-between mb-2">
                <Text className="block text-sm font-archivo_700 text-white ml-2">
                  Colaboradores
                </Text>
                <Text className="block text-sm font-archivo_700 text-white mr-2">
                  Turno
                </Text>
              </View>
              <FlatList
                data={colaborators}
                scrollEnabled={false}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Colaborator
                    name={item.name}
                    isSun={item.isSun}
                    onPress={() => handleRemoveColaborator(item.name)}
                    onSelect={(newDays) => setDays(newDays)}
                  />
                )}
              />
              {showColaboratorInput ? (
                <View className="w-full overflow-hidden flex-row h-14 rounded-xl bg-[#202024] divide-x-[1px] divide-[#323238] border border-[#323238]">
                  <TextInput
                    autoFocus
                    value={colaboratorName}
                    onChangeText={setColaboratorName}
                    className="flex-1 px-4 text-white font-archivo_600 text-base"
                    placeholder="Nome do colaborador"
                    placeholderTextColor="#E1E1E6"
                    cursorColor="#fff"
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setIsSunShift(!isSunShift)}
                    className="w-12 items-center justify-center"
                  >
                    <Feather
                      name={isSunShift ? "sun" : "moon"}
                      size={18}
                      color="#fff"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleAddColaborator}
                    className="w-12 items-center justify-center"
                  >
                    <Feather name="plus" size={18} color="#fff" />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setShowColaboratorInput(true)}
                  className="w-full bg-[#202024] flex-row space-x-3 h-14 rounded-xl items-center justify-center text-[#E1E1E6] font-archivo_600"
                >
                  <Feather name="plus-circle" size={18} color="#c6c6cc" />
                  <Text className="text-[#c6c6cc] font-archivo_600 text-base">
                    Adicionar colaborador
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View className="bg-[#202024] h-[1px] my-6 w-[80%] self-center" />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={Boolean(editing) ? handleUpdateScale : handleSaveScale}
            className={clsx(
              "bg-green-500 h-14 rounded-xl items-center justify-center",
              {
                ["bg-[#F7DD43]"]: Boolean(editing),
              }
            )}
          >
            <Text
              className={clsx("text-white text-base font-archivo_700", {
                ["text-black"]: Boolean(editing),
              })}
            >
              {Boolean(editing) ? "Salvar alterações" : "Salvar informações"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
