import clsx from "clsx";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  Platform,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useScaleAndColaborators } from "@/src/hooks/useScaleAndColaborators";

import { Day } from "@/src/components/Day";
import { Form } from "@/src/components/Form";
import { Header } from "@/src/components/Header";
import { ColaboratorItem } from "@/src/components/ColaboratorItem";

export default function EditablePage() {
  const { id, dateMonth, dateYear, editing } = useLocalSearchParams();

  const {
    title,
    month,
    setTitle,
    setMonth,
    weekdays,
    toggleDay,
    periodScale,
    colaborators,
    handleSubmit,
    isDaySelected,
    colaboratorName,
    colaboratorTurn,
    colaboratorSunday,
    setColaboratorTurn,
    setColaboratorName,
    setColaboratorSunday,
    handleAddColaborator,
    showColaboratorInput,
    handleRemoveColaborator,
    setShowColaboratorInput,
  } = useScaleAndColaborators(id.toString(), dateMonth.toString());

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
              month={month.toString()}
              year={dateYear.toString()}
              onChangeTitle={setTitle}
              onChangeMonth={setMonth}
            />
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
