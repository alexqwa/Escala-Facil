import dayjs from "dayjs";
import { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
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

import { useScales } from "@/src/hooks/useScales";

import { Day } from "@/src/components/Day";
import { Form } from "@/src/components/Form";
import { Header } from "@/src/components/Header";
import { Button } from "@/src/components/Button";
import { Colaborator } from "@/src/components/Colaborator";

export default function Scale() {
  const { titleParams, monthParams, yearParams } = useLocalSearchParams();
  const [show, setShow] = useState(false);

  const {
    year,
    title,
    month,
    loading,
    setYear,
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
    colaboratorWoman,
    colaboratorSunday,
    setColaboratorTurn,
    setColaboratorName,
    setColaboratorWoman,
    setColaboratorSunday,
    handleAddColaborator,
    showColaboratorInput,
    handleRemoveColaborator,
    setShowColaboratorInput,
  } = useScales(
    titleParams.toString(),
    monthParams.toString(),
    yearParams.toString()
  );

  const isDisabled = !title || !month || colaborators.length === 0 || loading;

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || colaboratorSunday;
    setShow(false);
    setColaboratorSunday(currentDate);
  };

  return (
    <View className="flex-1 items-center bg-[#121214]">
      <Header back={true} title="GERAR ESCALA" />
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
              year={year.trim()}
              month={month.trim()}
              onChangeYear={setYear}
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
              <View className="mb-2">
                <Text className="block text-sm font-archivo_700 text-white ml-2">
                  Colaboradores
                </Text>
              </View>
              <FlatList
                data={colaborators}
                scrollEnabled={false}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
                  return (
                    <Colaborator
                      name={item.name}
                      turn={item.turn}
                      woman={item.woman}
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
                      placeholder="Nome do colaborador"
                      value={colaboratorName}
                      onChangeText={setColaboratorName}
                      className="flex-1 px-4 text-white font-archivo_600 text-base"
                      placeholderTextColor="#E1E1E6"
                      cursorColor="#fff"
                    />
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={handleAddColaborator}
                      className="w-14 items-center justify-center"
                    >
                      <Ionicons
                        name="add-circle-outline"
                        size={22}
                        color="#fff"
                      />
                    </TouchableOpacity>
                  </View>
                  <View className="p-4">
                    <View className="flex-row justify-between">
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
                  <View className="p-4 flex-row items-center space-x-2">
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setColaboratorWoman(!colaboratorWoman)}
                      className="bg-[#323238] flex-1 py-2 flex-row items-center space-x-2 justify-center rounded-lg"
                    >
                      <Ionicons
                        name={colaboratorWoman ? "woman" : "man"}
                        color="#fff"
                        size={18}
                      />
                      <Text className="text-white font-archivo_600 text-sm">
                        {colaboratorWoman ? "Mulher" : "Homem"}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      className="bg-[#323238] flex-1 py-2 flex-row items-center space-x-2 justify-center rounded-lg"
                      onPress={() => setColaboratorTurn(!colaboratorTurn)}
                    >
                      <Ionicons
                        name={colaboratorTurn ? "sunny" : "moon"}
                        size={18}
                        color="#fff"
                      />
                      <Text className="text-white font-archivo_600 text-sm">
                        {colaboratorTurn ? "Manhã" : "Tarde"}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className="bg-[#323238] flex-1 py-2 flex-row items-center justify-center rounded-lg"
                      activeOpacity={0.7}
                      onPress={() => setShow(true)}
                    >
                      {show && (
                        <DateTimePicker
                          is24Hour
                          mode="date"
                          display="calendar"
                          value={colaboratorSunday}
                          onChange={onChangeDate}
                        />
                      )}
                      <Text className="text-white text-sm font-archivo_600">
                        {dayjs(colaboratorSunday).format("DD/MM/YYYY")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <Button
                  isDark
                  isLoading={false}
                  title="Adicionar colaborador"
                  onPress={() => setShowColaboratorInput(true)}
                >
                  <Feather name="plus-circle" size={18} color="#c6c6cc" />
                </Button>
              )}
            </View>
          </View>

          <View className="bg-[#202024] h-[1px] my-6 w-[80%] self-center" />
          <Button
            isLoading={loading}
            title="GERAR ESCALA"
            disabled={isDisabled}
            onPress={handleSubmit}
            isInactive={isDisabled}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
