import { memo } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Platform,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useCalaborators } from "@/src/hooks/useCalaborators";

import { Header } from "@/src/components/Header";
import { ColaboratorCard } from "@/src/components/cards/ColaboratorCard";
import { FormColaboratorCard } from "@/src/components/cards/FormColaboratorCard";

const ColaboratorCardMemo = memo(ColaboratorCard);

export default function CreateScale() {
  const {
    year,
    title,
    month,
    setYear,
    setTitle,
    setMonth,
    weekdays,
    toggleDay,
    periodScale,
    daysSelected,
    colaborators,
    colaboratorName,
    colaboratorWoman,
    onSaveScale,
    onAddColaborator,
    colaboratorSunday,
    onRemoveColaborator,
    colaboratorSchedule,
    showColaboratorCard,
    setColaborators,
    setColaboratorName,
    setColaboratorWoman,
    setColaboratorSunday,
    setColaboratorSchedule,
    setShowColaboratorCard,
  } = useCalaborators();

  const onSaveColaborator = (
    id: string,
    {
      name,
      woman,
      schedule,
      sunday,
      selectedDays,
    }: {
      name: string;
      woman: boolean;
      schedule: boolean;
      sunday: Date;
      selectedDays: number[];
    }
  ) => {
    setColaborators(
      (prev) =>
        prev.map((c) =>
          c.id === id
            ? { ...c, name, woman, schedule, sunday, weekday: selectedDays }
            : c
        ) // Mapeia selectedDays para weekday
    );
  };

  return (
    <View className="flex-1 items-center bg-background">
      <Header title="CRIAR ESCALA" back />
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "height" : "padding"}
      >
        <ScrollView
          contentContainerStyle={{ alignItems: "center", paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="bg-card w-full px-8 pt-14 pb-24 space-y-4">
            <Text
              allowFontScaling={false}
              className="text-foreground font-archivo_700 text-xl"
            >
              Que incrível que você quer{"\n"}criar uma escala.
            </Text>
            <Text
              allowFontScaling={false}
              className="text-muted_foreground font-archivo_400 text-sm"
            >
              O primeiro passo, é preencher esse formulário de inscrição.
            </Text>
          </View>
          <View className="bg-muted px-4 pt-8 pb-4 w-full max-w-[95%] rounded-2xl -mt-12">
            <Text
              allowFontScaling={false}
              className="text-foreground font-archivo_700 text-xl"
            >
              Dados da escala
            </Text>
            <View className="bg-border h-[1px] mt-2 mb-4" />
            <TextInput
              value={title}
              cursorColor="#ededed"
              allowFontScaling={false}
              placeholder="Nome da escala"
              placeholderTextColor="#777777"
              onChangeText={(value) => setTitle(value)}
              className="h-14 bg-card rounded-2xl text-foreground px-4 font-archivo_600 text-base mb-4"
            />
            <View className="flex-row items-center justify-center space-x-4 mb-4">
              <TextInput
                value={month}
                placeholder="Mês"
                cursorColor="#ededed"
                allowFontScaling={false}
                keyboardType="number-pad"
                placeholderTextColor="#777777"
                onChangeText={(value) => setMonth(value)}
                className="h-14 bg-card flex-1 rounded-2xl text-foreground px-4 font-archivo_600 text-base"
              />
              <TextInput
                value={year}
                placeholder="Ano"
                cursorColor="#ededed"
                allowFontScaling={false}
                keyboardType="number-pad"
                placeholderTextColor="#777777"
                onChangeText={(value) => setYear(value)}
                className="h-14 bg-card flex-1 rounded-2xl text-foreground px-4 font-archivo_600 text-base"
              />
            </View>
            <View className="h-14 bg-card rounded-2xl px-4 justify-center mb-4">
              <Text
                allowFontScaling={false}
                className="font-archivo_600 text-foreground text-base"
              >
                {periodScale}
              </Text>
            </View>
            <FlatList
              data={colaborators}
              scrollEnabled={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <ColaboratorCardMemo
                    name={item.name}
                    woman={item.woman}
                    sunday={item.sunday}
                    schedule={item.schedule}
                    selectedDays={item.weekday}
                    onRemoveColaborator={() =>
                      onRemoveColaborator(item.id, item.name)
                    }
                    onSave={(updateData) =>
                      onSaveColaborator(item.id, updateData)
                    }
                  />
                );
              }}
            />
            {!showColaboratorCard ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowColaboratorCard(!showColaboratorCard)}
                className="bg-foreground rounded-2xl h-14 flex-row space-x-2 items-center justify-center"
              >
                <Ionicons name="add-circle-outline" size={24} color="#121214" />
                <Text
                  allowFontScaling={false}
                  className="text-background text-base font-archivo_600"
                >
                  Adicionar colaborador
                </Text>
              </TouchableOpacity>
            ) : (
              <FormColaboratorCard
                weekdays={weekdays}
                toggleDay={toggleDay}
                daysSelected={daysSelected}
                colaboratorName={colaboratorName}
                onAddColaborator={onAddColaborator}
                colaboratorWoman={colaboratorWoman}
                colaboratorSunday={colaboratorSunday}
                setColaboratorName={setColaboratorName}
                colaboratorSchedule={colaboratorSchedule}
                setColaboratorWoman={setColaboratorWoman}
                setColaboratorSunday={setColaboratorSunday}
                setColaboratorSchedule={setColaboratorSchedule}
              />
            )}
            <View className="bg-border h-[1px] mt-4 mb-4" />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onSaveScale}
              className="bg-green-500 h-14 rounded-lg items-center justify-center"
            >
              <Text
                allowFontScaling={false}
                className="font-archivo_600 text-base text-background"
              >
                Criar Escala
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
