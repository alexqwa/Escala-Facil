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

interface ColaboratorItem {
  name: string;
  isSun: boolean;
}

export default function EditablePage() {
  const {
    saveScale,
    updateScale,
    currentScale,
    getScaleById,
    removeColaborator,
  } = useScale();
  const { id, editing } = useLocalSearchParams();

  const monthFormatted =
    dayjs().format("MMMM").charAt(0).toUpperCase() +
    dayjs().format("MMMM").slice(1);

  const [title, setTitle] = useState(id.toString());
  const [month, setMonth] = useState(monthFormatted);
  const [year, setYear] = useState(dayjs().format("YYYY"));
  const [colaborators, setColaborators] = useState<ColaboratorItem[]>([]);
  const [showColaboratorInput, setShowColaboratorInput] = useState(false);
  const [colaboratorName, setColaboratorName] = useState("");
  const [isSunShift, setIsSunShift] = useState(true);

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
        month,
        year,
        colaborators,
      };
      await saveScale(newScale);
      setTitle("");
      setMonth(monthFormatted);
      setYear(dayjs().format("YYYY"));
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
        month,
        year,
        colaborators,
      });
      Alert.alert(
        "Alerta!",
        "As informações da sua escala foram alteradas com sucesso!"
      );
    } catch (err) {
      console.error("Error updating scale:", err);
    } finally {
      router.push("/MyScales");
    }
  };

  const handleRemoveColaborator = async (colabName: string) => {
    if (!currentScale) return;

    try {
      const success = await removeColaborator(currentScale.id, colabName);
      if (success) {
        // Atualiza a lista local de colaboradores
        setColaborators((prev) => prev.filter((c) => c.name !== colabName));
      }
    } catch (err) {
      console.error("Error removing colaborator:", err);
    }
  };

  useEffect(() => {
    if (editing) {
      async function handleLoadScale(id: string) {
        const scale = await getScaleById(id);
        if (scale) {
          setTitle(scale.title);
          setMonth(scale.month);
          setYear(scale.year);
          setColaborators(scale.colaborators);
        }
      }

      handleLoadScale(id.toString());
    }
  }, []);

  return (
    <View className="flex-1 items-center bg-[#121214]">
      <Header
        back
        title={Boolean(editing) ? "EDITAR ESCALA" : "GERAR ESCALA"}
      />
      <View className="max-w-[85%] w-full flex-1 mt-16">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "position"}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            <View className="space-y-4">
              <Form
                title={title}
                month={month}
                year={year}
                changeTextTitle={setTitle}
                changeTextMonth={setMonth}
                changeTextYear={setYear}
              />
              <View className="space-y-2">
                <Text className="block text-sm font-archivo_700 text-white ml-2">
                  Período da escala
                </Text>
                <View className="w-full bg-[#202024] h-14 rounded-xl px-4 justify-center">
                  <Text className="text-[#E1E1E6] font-archivo_600 text-base">
                    Julho - Agosto
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
                        onPress={() => handleRemoveColaborator(item.name)}
                        className="w-12 items-center justify-center"
                      >
                        <Feather name="trash-2" size={18} color="#fff" />
                      </TouchableOpacity>
                    </View>
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
    </View>
  );
}
