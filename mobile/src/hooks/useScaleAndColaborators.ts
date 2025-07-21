import dayjs from "dayjs";
import { Alert } from "react-native";
import { router } from "expo-router";
import { useEffect, useState } from "react";

import { api } from "@/src/lib/axios";
import { useMonthPair } from "@/src/hooks/useMonthPair";

interface Scale {
  title: string;
  month: number;
  year: number;
  periodScale: string;
  colaborators: Colaborator[];
}

interface Colaborator {
  name: string;
  turn: boolean;
  sunday: number;
  weekday: number[];
}

export function useScaleAndColaborators(
  id: string,
  monthParams: number,
  yearParams: number
) {
  const [title, setTitle] = useState(id);
  const [month, setMonth] = useState(monthParams);
  const [year, setYear] = useState(yearParams);
  const [periodScale, setPeriodScale] = useState("");
  const [colaborators, setColaborators] = useState<Colaborator[]>([]);
  const [colaboratorName, setColaboratorName] = useState("");
  const [colaboratorTurn, setColaboratorTurn] = useState(true);
  const [colaboratorSunday, setColaboratorSunday] = useState(0);
  const [colaboratorWeekday, setColaboratorWeekday] = useState<number[]>([]);
  const [showColaboratorInput, setShowColaboratorInput] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const monthPair = useMonthPair(Number(month));
    setPeriodScale(monthPair);
  }, [month]);

  async function handleSubmit() {
    if (!title.trim() || !periodScale.trim() || colaborators.length === 0) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }
    setLoading(true);

    const scaleData: Scale = {
      title,
      month,
      year,
      periodScale,
      colaborators,
    };

    try {
      const response = await api.post("/scales", scaleData);
      Alert.alert("Sucesso", "Escala gerada com sucesso.");
      console.log(response.data);
      resetInputs();
      router.replace("/(tabs)/MyScales");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Erro ao gerar sua escala!");
    } finally {
      setLoading(false);
    }
  }

  function resetInputs() {
    setTitle("");
    setMonth(0);
    setYear(0);
    setPeriodScale("");
    setColaborators([]);
  }

  function handleAddColaborator() {
    if (!colaboratorName.trim()) {
      Alert.alert("Erro", "O nome do colaborador é obrigatório.");
      return;
    }

    const newColaborator: Colaborator = {
      name: colaboratorName,
      turn: colaboratorTurn,
      sunday: colaboratorSunday,
      weekday: colaboratorWeekday,
    };
    setColaborators((prev) => [...prev, newColaborator]);
    resetColaboratorInputs();
  }

  function handleRemoveColaborator(name: string) {
    Alert.alert(
      "Remover colaborador",
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
  }

  function resetColaboratorInputs() {
    setColaboratorName("");
    setColaboratorSunday(0);
    setColaboratorTurn(true);
    setColaboratorWeekday([]);
    setShowColaboratorInput(false);
  }

  const weekdays = [...Array(7)].map((_, i) => ({
    day: i,
    initial: dayjs().day(i).format("dddd").charAt(0).toUpperCase(),
  }));

  function toggleDay(dayNumber: number) {
    setColaboratorWeekday((prev) => {
      const existingIndex = prev.indexOf(dayNumber);
      if (existingIndex >= 0) {
        return prev.filter((day) => day != dayNumber);
      } else {
        return [...prev, dayNumber];
      }
    });
  }

  function isDaySelected(dayNumber: number) {
    return colaboratorWeekday.includes(dayNumber);
  }

  return {
    title,
    setTitle,
    month,
    setMonth,
    year,
    setYear,
    periodScale,
    handleSubmit,
    colaborators,
    setColaborators,
    weekdays,
    toggleDay,
    colaboratorName,
    colaboratorTurn,
    colaboratorSunday,
    colaboratorWeekday,
    setColaboratorName,
    setColaboratorTurn,
    setColaboratorSunday,
    setColaboratorWeekday,
    handleAddColaborator,
    handleRemoveColaborator,
    showColaboratorInput,
    setShowColaboratorInput,
    isDaySelected,
    loading,
  };
}
