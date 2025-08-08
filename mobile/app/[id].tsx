import dayjs from "dayjs";
import * as Print from "expo-print";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
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
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";

import { useDates } from "@/src/hooks/useDates";
import { useScales } from "@/src/hooks/useScales";

import { Day } from "@/src/components/Day";
import { Form } from "@/src/components/Form";
import { Header } from "@/src/components/Header";
import { Button } from "@/src/components/Button";
import { Colaborator } from "@/src/components/Colaborator";

export default function EditablePage() {
  const { id } = useLocalSearchParams();
  const [show, setShow] = useState(false);
  const { nextSundaysAfter20th, getDatesEvery28Days } = useDates();

  const {
    year,
    title,
    month,
    setYear,
    loading,
    weekdays,
    setMonth,
    setTitle,
    toggleDay,
    periodScale,
    loadingScale,
    colaborators,
    handleUpdate,
    isDaySelected,
    fetchScaleById,
    colaboratorName,
    colaboratorTurn,
    colaboratorSunday,
    setColaboratorName,
    setColaboratorTurn,
    showColaboratorInput,
    setColaboratorSunday,
    handleAddColaborator,
    setShowColaboratorInput,
    handleRemoveColaborator,
  } = useScales("", "", "");

  useEffect(() => {
    fetchScaleById(Number(id));
  }, [id]);

  const isDisabled = !title || !month || colaborators.length === 0;

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || colaboratorSunday;
    setShow(false);
    setColaboratorSunday(currentDate);
  };

  const sundays = nextSundaysAfter20th(Number(year), Number(month));

  const html = `
  <!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: "Inter", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 7rem;
      }

      table {
        border-collapse: collapse;
        width: 100%;
      }

      th, td {
        border: 1px solid #000;
        text-align: center;
        height: 20px;
      }

      th {
        background-color: #5b9bd5;
        color: black;
        font-weight: 700;
      }

      .header th {
        background-color: #002060;
        height: 80px;
        font-size: 1.5rem;
        color: white;
        text-transform: uppercase;
      }

      .day-off {
        background-color: #f2f2f2;
        font-weight: bold;
        width: 200px;
      }

      .turn {
        background-color: #f2f2f2;
        font-weight: bold;
        width: 75px;
      }

      .work {
        background-color: #2f75b5;
        font-weight: bold;
        width: 75px;
      }

      .dsr {
        background-color: #185892;
        font-weight: bold;
        width: 75px;
      }

      .uppercase {
        text-transform: uppercase;
      }

      .small-text {
        font-size: 0.625rem;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <table role="table">
      <thead>
        <tr class="header">
          <th colspan="8">Escala (${title.trim()}) ${periodScale}</th>
        </tr>
        <tr>
          <th class="small-text" colspan="3">DIA DO MÊS</th>
          ${sundays
            .map((date, i) => `<th class="small-text" key="${i}">${date}</th>`)
            .join("")}
        </tr>
        <tr>
          <th class="small-text">NOME</th>
          <th class="small-text">FOLGA DA SEMANA</th>
          <th class="small-text">TURNO</th>
          <th class="small-text">DOM</th>
          <th class="small-text">DOM</th>
          <th class="small-text">DOM</th>
          <th class="small-text">DOM</th>
          <th class="small-text">DOM</th>
        </tr>
      </thead>
      <tbody>
      ${colaborators
        .map((item, i) => {
          const datesEvery28Days = getDatesEvery28Days(item.sunday);

          return `
        <tr key="${i}">
          <td class="uppercase small-text">${item.name}</td>
          <td class="day-off small-text">${
            Array.isArray(item.weekday)
              ? item.weekday
                  .map((w: number) =>
                    dayjs().day(w).format("dddd").toUpperCase()
                  )
                  .join(" / ")
              : dayjs().day(item.weekday).format("dddd").toUpperCase()
          }</td>
          <td class="turn small-text">${item.turn ? "MANHÃ" : "TARDE"}</td>
          ${sundays
            .map((sunday) => {
              const isDSR = datesEvery28Days.includes(sunday);
              const isAllDSR = item.weekday.includes(0);
              return `<td class="${
                isDSR || isAllDSR ? "dsr" : "work"
              } small-text">${isDSR || isAllDSR ? "DSR" : "1"}</td>`;
            })
            .join("")}
        </tr>
            `;
        })
        .join("")}
      </tbody>
    </table>
  </body>
</html>
  `;

  const print = async () => {
    await Print.printAsync({
      html,
      orientation: "landscape",
    });
  };

  return (
    <View className="flex-1 items-center bg-[#121214]">
      <Header back title="EDITAR ESCALA" />
      {loadingScale ? (
        <View className="my-auto space-y-3">
          <ActivityIndicator size="small" color="#fff" />
          <Text className="text-white text-base font-archivo_700">
            Carregando informações...
          </Text>
        </View>
      ) : (
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
                        placeholder="Nome"
                        value={colaboratorName}
                        onChangeText={setColaboratorName}
                        className="flex-1 px-4 text-white font-archivo_600 text-base"
                        placeholderTextColor="#E1E1E6"
                        cursorColor="#fff"
                      />
                      <TouchableOpacity
                        className="px-3 border-l border-[#323238] items-center justify-center"
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
                        <Text className="text-white text-base font-archivo_600">
                          {dayjs(colaboratorSunday).format("DD/MM/YYYY")}
                        </Text>
                      </TouchableOpacity>
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
            <View className="space-y-4">
              <Button isDark title="GERAR PDF" onPress={print}>
                <Feather name="file-text" size={18} color="#fff" />
              </Button>
              <Button
                isChange
                isLoading={loading}
                disabled={isDisabled || loading}
                isInactive={isDisabled || loading}
                title="SALVAR ALTERAÇÕES"
                onPress={() => handleUpdate(Number(id))}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}
