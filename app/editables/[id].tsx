import dayjs from "dayjs";
import { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useScales } from "@/src/hooks/useScales";

import { Form } from "@/src/components/Form";
import { Header } from "@/src/components/Header";
import { Colaborator } from "@/src/components/Colaborator";

export default function EditablePage() {
  const { id } = useLocalSearchParams();
  const {
    addScale,
    currentScale,
    newCollaborator,
    addCollaborator,
    removeCollaborator,
    setNewCollaborator,
    updatedCurrentScale,
    showCollaboratorInput,
    setShowCollaboratorInput,
  } = useScales();

  const date = dayjs();
  const currentMonth =
    date.format("MMMM").charAt(0).toUpperCase() + date.format("MMMM").slice(1);
  const nextMonth =
    date.add(1, "month").format("MMMM").charAt(0).toUpperCase() +
    date.add(1, "month").format("MMMM").slice(1);
  const periodScale = `${currentMonth} - ${nextMonth}`;

  useEffect(() => {
    updatedCurrentScale("title", id);
    updatedCurrentScale("month", periodScale);
    updatedCurrentScale("year", date.format("YYYY"));
  }, []);

  return (
    <View className="flex-1 items-center bg-[#121214]">
      <Header back title="EDITAR ESCALA" />
      <View className="max-w-[85%] w-full flex-1 mt-16">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View className="space-y-4">
            <Form
              editable={false}
              title={currentScale.title}
              changeTitle={(text) => updatedCurrentScale("title", text)}
            />
            <View className="space-y-2">
              <Text className="block text-sm font-archivo_700 text-white ml-2">
                Período da escala
              </Text>
              <View className="w-full bg-[#202024] h-14 rounded-xl px-4 justify-center">
                <Text className="text-[#c6c6cc] font-archivo_600 text-base">
                  {periodScale}
                </Text>
              </View>
            </View>
            <View>
              <Text className="block text-sm font-archivo_700 text-white ml-2 mb-2">
                Colaboradores
              </Text>
              <FlatList
                data={currentScale.collaborators}
                keyExtractor={(item, index) => String(index)}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                renderItem={({ item, index }) => (
                  <Colaborator
                    key={index}
                    title={item}
                    onPress={() => removeCollaborator(index)}
                  />
                )}
              />
              {showCollaboratorInput ? (
                <View className="w-full mb-2 overflow-hidden flex-row h-14 rounded-xl divide-x-[2px] divide-[#323238]">
                  <TextInput
                    autoFocus={true}
                    value={newCollaborator}
                    onChangeText={setNewCollaborator}
                    placeholder="Nome do colaborador"
                    className="flex-1 bg-[#202024] text-[#E1E1E6] text-base px-4 font-archivo_600"
                    placeholderTextColor="#c6c6cc"
                    cursorColor="#fff"
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    className="w-14 items-center justify-center bg-[#202024]"
                  >
                    <Feather name="sun" size={18} color="#E1E1E6" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={addCollaborator}
                    className="w-14 items-center justify-center bg-[#202024]"
                  >
                    <Feather name="plus-circle" size={18} color="#E1E1E6" />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.7}
                  className="w-full bg-[#202024] flex-row space-x-3 h-14 rounded-xl items-center justify-center text-[#E1E1E6] font-archivo_600"
                  onPress={() => setShowCollaboratorInput(true)}
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
            onPress={addScale}
            className="bg-green-500 h-14 rounded-xl items-center justify-center"
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
