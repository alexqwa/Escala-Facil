import dayjs from "dayjs";
import { Alert } from "react-native";
import { router } from "expo-router";
import { useEffect, useState } from "react";

import { api } from "@/src/lib/axios";

import { useMonthPair } from "@/src/hooks/useMonthPair";

interface Scale {
  id: number;
  user: string;
  year: string;
  title: string;
  month: string;
  periodScale: string;
  colaborators: Colaborator[];
}

interface Colaborator {
  sunday: Date;
  name: string;
  turn: boolean;
  woman: boolean;
  weekday: number[];
}

export function useScales(
  titleParams: string,
  monthParams: string,
  yearParams: string,
  userIdentifier: string | undefined
) {
  // Estados para puxar dados das escalas
  const [scales, setScales] = useState<Scale[]>([]);
  const [loadingScale, setLoadingScale] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados para as escalas
  const [user, setUser] = useState(userIdentifier);
  const [year, setYear] = useState(yearParams);
  const [title, setTitle] = useState(titleParams);
  const [month, setMonth] = useState(monthParams);
  const [periodScale, setPeriodScale] = useState("");
  const [colaborators, setColaborators] = useState<Colaborator[]>([]);

  // Estados para os colaboradores
  const [colaboratorName, setColaboratorName] = useState("");
  const [colaboratorTurn, setColaboratorTurn] = useState(true);
  const [colaboratorWoman, setColaboratorWoman] = useState(false);
  const [colaboratorSunday, setColaboratorSunday] = useState(new Date());
  const [showColaboratorInput, setShowColaboratorInput] = useState(false);
  const [colaboratorWeekday, setColaboratorWeekday] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const monthPair = useMonthPair(month);
    setPeriodScale(monthPair);
  }, [month]);

  async function fetchScales(userId: string) {
    if (!userId) {
      setError("ID do usuário não disponível");
      setLoadingScale(false);
      return;
    }
    try {
      setLoadingScale(true);
      const response = await api.get<Scale[]>(`/scales/user/${userId}`);
      setScales(response.data);
      setError(null);
    } catch (error) {
      console.error("Erro ao buscar escalas!", error);
      setError("Erro ao buscar escalas. Tente novamente mais tarde.");
    } finally {
      setLoadingScale(false);
    }
  }

  async function handleUpdate(id: number) {
    if (!title.trim() || !periodScale.trim() || colaborators.length === 0) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }
    setLoading(true);

    const scaleData: Omit<Scale, "id"> = {
      user: user ?? "",
      title,
      month,
      year,
      periodScale,
      colaborators,
    };

    try {
      const response = await api.put(`/edit/${id}`, scaleData);
      Alert.alert("Sucesso", "Escala atualizada com sucesso.");
      console.log(response.data);
      resetInputs();
      router.replace("/(tabs)/MyScales");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Erro ao atualizar sua escala!");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit() {
    if (!title.trim() || !periodScale.trim() || colaborators.length === 0) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }
    setLoading(true);

    const scaleData: Omit<Scale, "id"> = {
      user: user ?? "",
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

  async function fetchScaleById(scaleId: number) {
    setLoading(true);
    try {
      const response = await api.get(`/scales/${scaleId}`);
      const scaleData = response.data;
      setTitle(scaleData.title);
      setMonth(scaleData.month);
      setYear(scaleData.year);
      setPeriodScale(scaleData.periodScale);
      setColaborators(scaleData.colaborators);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Erro ao recuperar os dados da escala!");
    } finally {
      setLoading(false);
      setLoadingScale(false);
    }
  }

  function handleRemoveScale(id: number, title: string) {
    Alert.alert(
      "Remover escala",
      `Você tem certeza que deseja remover ${title}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          onPress: async () => {
            const scaleToRemove = scales.find((scale) => scale.id === id);
            if (!scaleToRemove) return;

            setScales((prev) => prev.filter((scale) => scale.id !== id));
            try {
              await api.delete(`/scales/${id}`);
            } catch (error) {
              console.error("Erro ao remover escala!", error);

              setScales((prev) => [...prev, scaleToRemove]);
              Alert.alert(
                "Erro",
                "Não foi possível remover a escala. Tente novamente."
              );
            }
          },
        },
      ]
    );
  }

  function resetInputs() {
    setUser("");
    setTitle("");
    setMonth("");
    setYear("");
    setPeriodScale("");
    setColaborators([]);
  }

  function handleAddColaborator() {
    if (!colaboratorName.trim() || colaboratorWeekday.length === 0) {
      Alert.alert("Erro", "Todos os dados são obrigatório.");
      return;
    }

    const newColaborator: Colaborator = {
      name: colaboratorName,
      turn: colaboratorTurn,
      woman: colaboratorWoman,
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
    setColaboratorTurn(true);
    setColaboratorWoman(false);
    setColaboratorWeekday([]);
    setShowColaboratorInput(false);
    setColaboratorSunday(new Date());
  }

  const weekdays = [...Array(7)].map((_, i) => ({
    day: i,
    initial: dayjs().day(i).format("dddd").charAt(0).toUpperCase(),
  }));

  function toggleDay(dayNumber: number) {
    setColaboratorWeekday((prev) => {
      const existingIndex = prev.indexOf(dayNumber);
      if (existingIndex >= 0) {
        // Se o dia já está marcado, removê-lo
        return prev.filter((day) => day !== dayNumber);
      } else {
        // Se o dia não está marcado, verificar se já existem 2 dias marcados
        if (prev.length < 2) {
          return [...prev, dayNumber]; // Adicionar o novo dia
        } else {
          return prev; // Não adicionar se já houver 2 dias
        }
      }
    });
  }

  // function toggleDay(dayNumber: number) {
  //   setColaboratorWeekday((prev) => {
  //     const existingIndex = prev.indexOf(dayNumber);
  //     if (existingIndex >= 0) {
  //       return prev.filter((day) => day != dayNumber);
  //     } else {
  //       return [...prev, dayNumber];
  //     }
  //   });
  // }

  function isDaySelected(dayNumber: number) {
    return colaboratorWeekday.includes(dayNumber);
  }

  return {
    year,
    title,
    error,
    month,
    scales,
    loading,
    setYear,
    setUser,
    setMonth,
    setTitle,
    weekdays,
    toggleDay,
    fetchScales,
    periodScale,
    handleSubmit,
    colaborators,
    loadingScale,
    handleUpdate,
    isDaySelected,
    fetchScaleById,
    setColaborators,
    colaboratorName,
    colaboratorTurn,
    colaboratorWoman,
    colaboratorSunday,
    handleRemoveScale,
    colaboratorWeekday,
    setColaboratorName,
    setColaboratorTurn,
    setColaboratorWoman,
    setColaboratorSunday,
    showColaboratorInput,
    handleAddColaborator,
    setColaboratorWeekday,
    handleRemoveColaborator,
    setShowColaboratorInput,
  };
}
