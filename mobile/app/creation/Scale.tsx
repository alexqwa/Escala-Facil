import { memo } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  Platform,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import { useUser } from "@clerk/clerk-expo";
import { useScales } from "@/src/hooks/useScales";

import { Form } from "@/src/components/Form";
import { Header } from "@/src/components/Header";
import { Colaborator } from "@/src/components/Colaborator";
import { ButtonPrimary } from "@/src/components/ButtonPrimary";
import { ColaboratorInfo } from "@/src/components/ColaboratorInfo";

const ColaboratorMemo = memo(Colaborator);

export default function Scale() {
  const { user } = useUser();
  const { titleParams, monthParams, yearParams } = useLocalSearchParams();

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
    yearParams.toString(),
    user?.id
  );

  const isDisabled = !title || !month || colaborators.length === 0 || loading;

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
              <Text
                allowFontScaling={false}
                className="block text-sm font-archivo_700 text-white ml-2"
              >
                Período da escala
              </Text>
              <View className="w-full bg-[#202024] h-14 rounded-xl px-4 justify-center">
                <Text
                  allowFontScaling={false}
                  className="text-[#E1E1E6] font-archivo_600 text-base"
                >
                  {periodScale}
                </Text>
              </View>
            </View>
            <View>
              <View className="mb-2">
                <Text
                  allowFontScaling={false}
                  className="block text-sm font-archivo_700 text-white ml-2"
                >
                  Colaboradores
                </Text>
              </View>
              <FlatList
                data={colaborators}
                scrollEnabled={false}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }) => {
                  return (
                    <ColaboratorMemo
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
                <ColaboratorInfo
                  weekdays={weekdays}
                  toggleDay={toggleDay}
                  isDaySelected={isDaySelected}
                  colaboratorName={colaboratorName}
                  colaboratorTurn={colaboratorTurn}
                  colaboratorWoman={colaboratorWoman}
                  colaboratorSunday={colaboratorSunday}
                  setColaboratorName={setColaboratorName}
                  setColaboratorTurn={setColaboratorTurn}
                  setColaboratorWoman={setColaboratorWoman}
                  setColaboratorSunday={setColaboratorSunday}
                  handleAddColaborator={handleAddColaborator}
                />
              ) : (
                <ButtonPrimary
                  disabled={false}
                  icon="person-add"
                  onPress={() => setShowColaboratorInput(true)}
                  title="ADICIONAR COLABORADOR"
                  type={{ dark: true }}
                  color="#fff"
                />
              )}
            </View>
          </View>

          <View className="bg-[#202024] h-[1px] my-6 w-[80%] self-center" />
          <ButtonPrimary
            isLoading={loading}
            title="GERAR ESCALA"
            disabled={isDisabled}
            onPress={handleSubmit}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
