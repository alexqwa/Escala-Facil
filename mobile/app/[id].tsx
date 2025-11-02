import dayjs from "dayjs";
import * as Print from "expo-print";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useCallback, memo } from "react";
import {
  Text,
  View,
  Platform,
  FlatList,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";

import { useDates } from "@/src/hooks/useDates";
import { useScales } from "@/src/hooks/useScales";

import { Form } from "@/src/components/Form";
import { Header } from "@/src/components/Header";
import { Colaborator } from "@/src/components/Colaborator";
import { ButtonPrimary } from "@/src/components/ButtonPrimary";
import { ColaboratorInfo } from "@/src/components/ColaboratorInfo";

const ColaboratorMemo = memo(Colaborator);

export default function EditablePage() {
  const { id } = useLocalSearchParams();
  const { nextSundaysAfter20th, getDatesEvery28Days, getAlternateSundays } =
    useDates();
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
    colaboratorWoman,
    colaboratorSunday,
    setColaboratorName,
    setColaboratorTurn,
    setColaboratorWoman,
    showColaboratorInput,
    setColaboratorSunday,
    handleAddColaborator,
    setShowColaboratorInput,
    handleRemoveColaborator,
  } = useScales("", "", "", "");

  useEffect(() => {
    fetchScaleById(Number(id));
  }, [id]);

  const isDisabled = !title || !month || colaborators.length === 0;

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
                return a.turn === b.turn ? 0 : a.turn ? -1 : 1;
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
                      item.turn ? "MANHÃ" : "TARDE"
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
    <View className="flex-1 items-center bg-[#121214]">
      <Header back title="EDITAR ESCALA" />
      {loadingScale ? (
        <View className="my-auto space-y-3">
          <ActivityIndicator size="small" color="#fff" />
          <Text
            allowFontScaling={false}
            className="text-white text-base font-archivo_700"
          >
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
            contentContainerStyle={{
              paddingTop: 60,
              paddingBottom: 100,
            }}
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
            </View>
            <View className="mb-2 mt-4">
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
              renderItem={({ item }) => (
                <ColaboratorMemo
                  name={item.name}
                  turn={item.turn}
                  woman={item.woman}
                  sunday={item.sunday}
                  selectedDays={item.weekday}
                  onRemove={() => handleRemoveColaborator(item.name)}
                />
              )}
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
                color="#fff"
                disabled={false}
                type={{ dark: true }}
                icon="person-add-sharp"
                title="ADICIONAR COLABORADOR"
                onPress={() => setShowColaboratorInput(true)}
              />
            )}

            <View className="bg-[#202024] h-[1px] my-6 w-[80%] self-center" />
            <View className="space-y-2">
              <ButtonPrimary
                color="#fff"
                icon="document"
                onPress={print}
                disabled={false}
                title="GERAR PDF"
                type={{ dark: true }}
              />
              <ButtonPrimary
                isLoading={loading}
                disabled={isDisabled}
                type={{ yellow: true }}
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
