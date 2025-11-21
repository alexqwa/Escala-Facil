import dayjs from "dayjs";
import * as Print from "expo-print";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { memo, useCallback, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";

import { useDates } from "@/src/hooks/useDates";
import { useScales } from "@/src/hooks/useScales";

import { Header } from "@/src/components/Header";
import { ColaboratorCard } from "@/src/components/cards/ColaboratorCard";
import { FormColaboratorCard } from "@/src/components/cards/FormColaboratorCard";

const ColaboratorCardMemo = memo(ColaboratorCard);

export default function EditPage() {
  const { id } = useLocalSearchParams();
  const { nextSundaysAfter20th, getDatesEvery28Days, getAlternateSundays } =
    useDates();

  const {
    year,
    title,
    month,
    setYear,
    loading,
    setMonth,
    weekdays,
    setTitle,
    toggleDay,
    periodScale,
    colaborators,
    daysSelected,
    loadScaleById,
    onUpdateScale,
    colaboratorName,
    setColaborators,
    colaboratorWoman,
    onAddColaborator,
    colaboratorSunday,
    setColaboratorName,
    setColaboratorWoman,
    colaboratorSchedule,
    onRemoveColaborator,
    showColaboratorCard,
    setColaboratorSunday,
    setColaboratorSchedule,
    setShowColaboratorCard,
  } = useScales();

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

  useEffect(() => {
    loadScaleById(id.toString());
  }, [id]);

  const sundays = nextSundaysAfter20th(Number(year), Number(month));

  const generateHTML = useCallback(() => {
    return `
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
            .turn, .work, .dsr {
              background-color: #f2f2f2;
              font-weight: bold;
              width: 75px;
            }
            .work {
              background-color: #f2f2f2;
            }
            .dsr {
              background-color: #185892;
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
                  .map(
                    (date, i) =>
                      `<th class="small-text" key="${i}">${date}</th>`
                  )
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
              .sort((a, b) => {
                // Ordena primeiro por 'turn' (MANHÃ = true, TARDE = false)
                return a.schedule === b.schedule ? 0 : a.schedule ? 1 : -1;
              })
              .map((item, i) => {
                const datesEvery28Days = getDatesEvery28Days(item.sunday);
                const alternateDates = getAlternateSundays(item.sunday);
                return `
                  <tr key="${i}">
                    <td class="uppercase small-text">${item.name}</td>
                    <td class="day-off small-text">${
                      Array.isArray(item.weekday)
                        ? item.weekday
                            .map((w) =>
                              dayjs().day(w).format("dddd").toUpperCase()
                            )
                            .join(" / ")
                        : dayjs().day(item.weekday).format("dddd").toUpperCase()
                    }</td>
                    <td class="turn small-text">${
                      !item.schedule ? "MANHÃ" : "TARDE"
                    }</td>
                    ${sundays
                      .map((sunday) => {
                        const isDSR = datesEvery28Days.includes(sunday);
                        const dsrWOMAN = item.woman
                          ? alternateDates.includes(sunday)
                          : false;
                        const isAllDSR = item.weekday.includes(0);
                        const isDsrToShow = isDSR || isAllDSR || dsrWOMAN;
                        return `<td class="${
                          isDsrToShow ? "dsr" : "work"
                        } small-text">${isDsrToShow ? "DSR" : "1"}</td>`;
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
  }, [colaborators, sundays, title, periodScale]);

  const print = async () => {
    const html = generateHTML();
    await Print.printAsync({
      html,
      orientation: "landscape",
    });
  };

  return (
    <View className="bg-background items-center flex-1">
      <Header title="EDITAR ESCALA" back />
      {loading ? (
        <View className="items-center justify-center my-auto">
          <ActivityIndicator size={"small"} color="#ededed" />
          <Text
            allowFontScaling={false}
            className="text-foreground text-base font-archivo_600"
          >
            Carregando...
          </Text>
        </View>
      ) : (
        <KeyboardAvoidingView
          className="flex-1 w-full"
          behavior={Platform.OS === "ios" ? "height" : "padding"}
        >
          <ScrollView
            contentContainerStyle={{ alignItems: "center", paddingBottom: 80 }}
            showsVerticalScrollIndicator={false}
          >
            <View className="bg-card w-full px-8 py-14 space-y-2">
              <Text
                allowFontScaling={false}
                className="text-foreground font-archivo_700 text-2xl"
              >
                {title}
              </Text>
              <Text
                allowFontScaling={false}
                className="text-muted_foreground font-archivo_600 text-base"
              >
                {periodScale}
              </Text>
            </View>
            <View className="bg-muted px-4 pt-8 pb-4 w-full max-w-[95%] rounded-2xl -mt-8">
              <Text
                allowFontScaling={false}
                className="text-xl font-archivo_700 text-foreground"
              >
                Dados da escala
              </Text>
              <View className="bg-border h-[1px] mt-2 mb-4" />
              <TextInput
                value={title}
                cursorColor="#ededed"
                allowFontScaling={false}
                placeholder="Nome da escala"
                onChangeText={(value) => setTitle(value)}
                placeholderTextColor="#777777"
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
                renderItem={({ item }) => (
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
                )}
              />
              {!showColaboratorCard ? (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setShowColaboratorCard(!showColaboratorCard)}
                  className="bg-foreground rounded-2xl h-14 flex-row space-x-2 items-center justify-center"
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={24}
                    color="#121214"
                  />
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
              <View className="flex-row items-center justify-center space-x-3">
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onUpdateScale(id.toString())}
                  className="bg-green-500 h-14 rounded-lg items-center  flex-1 justify-center"
                >
                  <Text
                    allowFontScaling={false}
                    className="font-archivo_600 text-base text-background"
                  >
                    Salvar Alterações
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={print}
                  activeOpacity={0.7}
                  className="bg-green-500 h-14 w-14 rounded-lg items-center justify-center"
                >
                  <Ionicons name="document-text" size={24} color="#0a0a0a" />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}
