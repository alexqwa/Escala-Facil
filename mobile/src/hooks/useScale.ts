import { router } from "expo-router";
import { Alert } from "react-native";
import { useEffect, useState } from "react";

import { api } from "@/src/lib/axios";
import { useMonthPair } from "@/src/hooks/useMonthPair";

interface Scale {
  title: string;
  periodScale: string;
  colaborators: Colaborator[];
}

interface Colaborator {
  name: string;
  turn: boolean;
  sunday: number;
  weekday: number[];
}

export function useScale(id: string, dateMonth: string) {
  const [title, setTitle] = useState(id);
  const [month, setMonth] = useState(dateMonth);
  const [periodScale, setPeriodScale] = useState("");
  const [colaborators, setColaborators] = useState<Colaborator[]>([]);

  useEffect(() => {
    const monthPair = useMonthPair(Number(month));
    setPeriodScale(monthPair);
  }, [month]);

  async function handleSubmit() {
    if (!title.trim() || !periodScale.trim() || colaborators.length === 0) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    const scaleData: Scale = {
      title,
      periodScale,
      colaborators,
    };

    try {
      const response = await api.post("/scales", scaleData);
      Alert.alert("Sucesso", "Escala gerada com sucesso!");
      console.log(response.data);
      resetInputs();
      router.replace("/(tabs)/MyScales");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Erro ao gerar sua escala!");
    }
  }

  function resetInputs() {
    setTitle("");
    setPeriodScale("");
    setColaborators([]);
  }

  return {
    title,
    setTitle,
    month,
    setMonth,
    periodScale,
    handleSubmit,
    colaborators,
    setColaborators,
  };
}
