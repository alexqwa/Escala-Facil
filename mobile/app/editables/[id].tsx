import clsx from "clsx";
import dayjs from "dayjs";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
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

import { api } from "@/src/lib/axios";
import { useMonthPair } from "@/src/hooks/useMonthPair";

import { Day } from "@/src/components/Day";
import { Header } from "@/src/components/Header";
import { ColaboratorItem } from "@/src/components/ColaboratorItem";

interface Scale {
  title: string;
  periodScale: string;
  colaborators: Colaborators[];
}

interface Colaborators {
  name: string;
  turn: boolean;
  sunday: number;
  weekday: number[];
}

export default function EditablePage() {
  const { id, dateMonth, dateYear, editing } = useLocalSearchParams();
  const [title, setTitle] = useState(id.toString());
  const [month, setMonth] = useState(dateMonth.toString());
  const [periodScale, setPeriodScale] = useState("");

  const [colaborators, setColaborators] = useState<Colaborators[]>([]);
  const [colaboratorName, setColaboratorName] = useState("");
  const [colaboratorTurn, setColaboratorTurn] = useState(true);
  const [colaboratorSunday, setColaboratorSunday] = useState(0);
  const [colaboratorWeekday, setColaboratorWeekday] = useState<number[]>([]);

  const [showColaboratorInput, setShowColaboratorInput] = useState(false);

  useEffect(() => {
    const monthPair = useMonthPair(Number(month));
    setPeriodScale(monthPair);
  }, [month]);

  const handleAddColaborator = () => {
    if (!colaboratorName.trim()) {
      Alert.alert("Erro", "O nome do colaborador é obrigatório.");
      return;
    }

    const newColaborator: Colaborators = {
      name: colaboratorName,
      turn: colaboratorTurn,
      sunday: colaboratorSunday,
      weekday: colaboratorWeekday,
    };

    setColaboratorName("");
    setColaboratorSunday(0);
    setColaboratorTurn(true);
    setColaboratorWeekday([]);
    setColaborators([...colaborators, newColaborator]);
    setShowColaboratorInput(false);
  };

  const handleRemoveColaborator = (name: string) => {
    Alert.alert(
      "Remover Colaborador",
      `Você tem certeza que deseja remover ${name}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          onPress: () => {
            setColaborators((prev) =>
              prev.filter((colab) => colab.name !== name)
            );
          },
        },
      ]
    );
  };

  const weekdays = [...Array(7)].map((_, i) => ({
    day: i,
    initial: dayjs().day(i).format("dddd").charAt(0).toUpperCase(),
  }));

  const toggleDay = (dayNumber: number) => {
    setColaboratorWeekday((prev) => {
      const existingIndex = prev.indexOf(dayNumber);
      if (existingIndex >= 0) {
        return prev.filter((day) => day !== dayNumber);
      } else {
        return [...prev, dayNumber];
      }
    });
  };

  const isDaySelected = (dayNumber: number) => {
    return colaboratorWeekday.includes(dayNumber);
  };

  async function handleSubmit() {
    if (!title.trim() || !periodScale.trim() || colaborators.length === 0) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }
    const scaleData: Scale = {
      title,
      periodScale,
      colaborators,
    };
    try {
      const response = await api.post("/scales", scaleData);
      Alert.alert("Sucesso", "Dados enviados com sucesso!");
      console.log(response.data);
      setTitle("");
      setPeriodScale("");
      setColaborators([]);
      router.replace("/(tabs)/MyScales");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao enviar os dados.");
    }
  }

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
            <View className="space-y-2">
              <Text className="block text-sm font-archivo_700 text-white ml-2">
                Título
              </Text>
              <TextInput
                value={title}
                onChangeText={setTitle}
                className="input-custom w-full bg-[#202024] h-14 rounded-xl px-4 border-2 border-[#202024] text-white text-base font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
                placeholder="Nome da escala"
                placeholderTextColor="#E1E1E6"
                cursorColor="#fff"
              />
            </View>
            <View className="flex-row w-full space-x-4">
              <View className="flex-1 space-y-2">
                <Text className="block text-sm font-archivo_700 text-white ml-2">
                  Mês
                </Text>
                <TextInput
                  value={month.trim()}
                  onChangeText={setMonth}
                  keyboardType="number-pad"
                  className="input-custom w-full bg-[#202024] h-14 rounded-xl px-4 border-2 border-[#202024] text-white text-base font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
                  placeholder="Mês de referência"
                  placeholderTextColor="#E1E1E6"
                  cursorColor="#fff"
                  maxLength={2}
                />
              </View>

              <View className="flex-1 space-y-2">
                <Text className="block text-sm font-archivo_700 text-white ml-2">
                  Ano
                </Text>
                <TextInput
                  value={dateYear.toString()}
                  keyboardType="number-pad"
                  className="input-custom w-full bg-[#202024] h-14 rounded-xl px-4 border-2 border-[#202024] text-white text-base font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
                  placeholder="Ano de referência"
                  placeholderTextColor="#E1E1E6"
                  cursorColor="#fff"
                  maxLength={4}
                />
              </View>
            </View>
            <View className="space-y-2">
              <Text className="block text-sm font-archivo_700 text-white ml-2">
                Período da escala
              </Text>
              <View className="w-full bg-[#202024] h-14 rounded-xl px-4 justify-center">
                <Text className="text-[#E1E1E6] font-archivo_600 text-base">
                  {periodScale}
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
                renderItem={({ item }) => {
                  return (
                    <ColaboratorItem
                      name={item.name}
                      turn={item.turn}
                      sunday={item.sunday}
                      selectedDays={item.weekday}
                      onRemove={() => handleRemoveColaborator(item.name)}
                    />
                  );
                }}
              />
              {showColaboratorInput ? (
                <View className="w-full overflow-hidden rounded-xl mb-2 bg-[#202024] divide-y-[1px] divide-[#323238] border border-[#323238]">
                  <View className="h-14 flex-row flex-1 divide-x-[1px] divide-[#323238]">
                    <TextInput
                      autoFocus
                      value={colaboratorName}
                      onChangeText={setColaboratorName}
                      className="flex-1 px-4 text-white font-archivo_600 text-base"
                      placeholder="Nome do colaborador"
                      placeholderTextColor="#E1E1E6"
                      cursorColor="#fff"
                    />
                    <View className="w-14 items-center justify-center">
                      <TextInput
                        value={colaboratorSunday.toString()}
                        onChangeText={(text) =>
                          setColaboratorSunday(Number(text))
                        }
                        className="text-white w-full text-center font-archivo_600 text-base flex-1"
                        placeholder="0"
                        placeholderTextColor="#e1e1e5"
                        cursorColor="#fff"
                        keyboardType="number-pad"
                      />
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      className="w-12 items-center justify-center"
                      onPress={() => setColaboratorTurn(!colaboratorTurn)}
                    >
                      <Feather
                        name={colaboratorTurn ? "sun" : "moon"}
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
                  <View className="p-4 flex-row justify-between">
                    {weekdays.map(({ day, initial }) => (
                      <Day
                        key={day}
                        day={initial}
                        isActive={isDaySelected(day)}
                        onPress={() => toggleDay(day)}
                      />
                    ))}
                  </View>
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
            onPress={handleSubmit}
            activeOpacity={0.7}
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
