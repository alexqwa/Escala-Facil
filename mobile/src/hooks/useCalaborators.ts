import dayjs from "dayjs";
import { Alert } from "react-native";
import { router } from "expo-router";
import uuid from "react-native-uuid";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useMonthPair } from "@/src/hooks/useMonthPair";

interface Scale {
  id: string;
  year: string;
  title: string;
  month: string;
  periodScale: string;
  colaborators: Colaborator[];
}

interface Colaborator {
  id: string;
  sunday: Date;
  name: string;
  woman: boolean;
  weekday: number[];
  schedule: boolean;
}

export function useCalaborators() {
  // Estados para as escalas
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [periodScale, setPeriodScale] = useState("");
  const [year, setYear] = useState(dayjs().format("YYYY"));
  const [month, setMonth] = useState(String(dayjs().month() + 1));

  // Estados para os colaboradores
  const [colaborators, setColaborators] = useState<Colaborator[]>([]);
  const [colaboratorName, setColaboratorName] = useState("");
  const [colaboratorWoman, setColaboratorWoman] = useState(false);
  const [colaboratorSchedule, setColaboratorSchedule] = useState(false);
  const [showColaboratorCard, setShowColaboratorCard] = useState(false);
  const [colaboratorSunday, setColaboratorSunday] = useState(new Date());
  const [colaboratorWeekday, setColaboratorWeekday] = useState<number[]>([]);

  // Novo estado para armazenar as escalas carregadas
  const [scales, setScales] = useState<Scale[]>([]);
  const [currentScale, setCurrentScale] = useState<Scale | null>(null);

  useEffect(() => {
    const monthPair = useMonthPair(month);
    setPeriodScale(monthPair);
  }, [month]);

  async function onSaveScale() {
    if (!title.trim() || colaborators.length === 0) {
      Alert.alert(
        "Erro",
        "Título e pelo menos um colaborador são obrigatórios para salvar a escala."
      );
      return;
    }

    try {
      const newScale: Scale = {
        id: uuid.v4(),
        year,
        title,
        month,
        periodScale,
        colaborators,
      };

      const storedScales = await AsyncStorage.getItem("scales");
      const scales: Scale[] = storedScales ? JSON.parse(storedScales) : [];

      scales.push(newScale);

      await AsyncStorage.setItem("scales", JSON.stringify(scales));

      Alert.alert("Sucesso", "Escala salva com sucesso!");
      router.replace("/(private)/scales");
      resetScaleInputs();
    } catch (error) {
      console.error("Erro ao salvar a escala:", error);
      Alert.alert("Erro", "Não foi possível salvar a escala. Tente novamente.");
    }
  }

  async function loadScales() {
    try {
      const storedScales = await AsyncStorage.getItem("scales");
      if (storedScales) {
        const parsedScales: Scale[] = JSON.parse(storedScales);

        const scalesWithDates = parsedScales.map((scale) => ({
          ...scale,
          colaborators: scale.colaborators.map((colab) => ({
            ...colab,
            sunday: new Date(colab.sunday),
          })),
        }));

        setScales(scalesWithDates);
      } else {
        setScales([]);
      }
    } catch (error) {
      console.error("Erro ao carregar as escalas:", error);
      Alert.alert(
        "Erro",
        "Não foi possível carregar as escalas. Tente novamente."
      );
    }
  }

  async function onRemoveScale(id: string) {
    const scaleToRemove = scales.find((scale) => scale.id === id);
    if (!scaleToRemove) {
      Alert.alert("Erro", "Escala não encontrada.");
      return;
    }

    Alert.alert(
      "Remover escala",
      `Você tem certeza que deseja remover a escala "${scaleToRemove.title}"?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          onPress: async () => {
            try {
              const storedScales = await AsyncStorage.getItem("scales");
              if (!storedScales) {
                Alert.alert("Erro", "Nenhuma escala encontrada para remover.");
                return;
              }

              const parsedScales: Scale[] = JSON.parse(storedScales);

              const updatedScales = parsedScales.filter(
                (scale) => scale.id !== id
              );

              await AsyncStorage.setItem(
                "scales",
                JSON.stringify(updatedScales)
              );

              setScales(updatedScales);

              Alert.alert("Sucesso", "Escala removida com sucesso!");
            } catch (error) {
              console.error("Erro ao remover a escala:", error);
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

  function onAddColaborator() {
    if (!colaboratorName.trim() || colaboratorWeekday.length === 0) {
      Alert.alert("Erro", "Todos os dados são obrigatório.");
      return;
    }

    const newColaborator: Colaborator = {
      id: uuid.v4(),
      name: colaboratorName,
      woman: colaboratorWoman,
      sunday: colaboratorSunday,
      weekday: colaboratorWeekday,
      schedule: colaboratorSchedule,
    };
    setColaborators((prev) => [...prev, newColaborator]);
    resetColaboratorInputs();
  }

  function onRemoveColaborator(id: string, name: string) {
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
            setColaborators((prev) => prev.filter((c) => c.id !== id));
          },
        },
      ]
    );
  }

  async function loadScaleById(id: string) {
    try {
      const storedScales = await AsyncStorage.getItem("scales");
      if (!storedScales) {
        Alert.alert("Erro", "Nenhuma escala encontrada.");
        return;
      }

      const parsedScales: Scale[] = JSON.parse(storedScales);
      const scale = parsedScales.find((s) => s.id === id);

      if (!scale) {
        Alert.alert("Erro", "Escala não encontrada.");
        return;
      }

      setCurrentScale({
        ...scale,
        colaborators: scale.colaborators.map((colab) => ({
          ...colab,
          sunday: new Date(colab.sunday),
        })),
      });

      // Adicionado: Define estados individuais para edição (compatibilidade)
      setYear(scale.year);
      setTitle(scale.title);
      setMonth(scale.month);
      setPeriodScale(scale.periodScale);
      setColaborators(
        scale.colaborators.map((colab) => ({
          ...colab,
          sunday: new Date(colab.sunday),
        }))
      );

      resetColaboratorInputs();
      setLoading(false);
    } catch (error) {
      console.error("Erro ao carregar a escala:", error);
      Alert.alert(
        "Erro",
        "Não foi possível carregar a escala. Tente novamente."
      );
    }
  }

  async function onUpdateScale(id: string) {
    if (!title.trim() || colaborators.length === 0) {
      Alert.alert(
        "Erro",
        "Título e pelo menos um colaborador são obrigatórios para atualizar a escala."
      );
      return;
    }

    try {
      const storedScales = await AsyncStorage.getItem("scales");
      if (!storedScales) {
        Alert.alert("Erro", "Nenhuma escala encontrada para atualizar.");
        return;
      }

      const parsedScales: Scale[] = JSON.parse(storedScales);
      const scaleIndex = parsedScales.findIndex((scale) => scale.id === id);

      if (scaleIndex === -1) {
        Alert.alert("Erro", "Escala não encontrada.");
        return;
      }

      // Atualiza a escala com os dados atuais
      const updatedScale: Scale = {
        id,
        year,
        title,
        month,
        periodScale, // Recalculado automaticamente pelo useEffect
        colaborators,
      };

      parsedScales[scaleIndex] = updatedScale;

      // Salva no AsyncStorage
      await AsyncStorage.setItem("scales", JSON.stringify(parsedScales));

      // Atualiza estados locais
      setScales(
        parsedScales.map((scale) => ({
          ...scale,
          colaborators: scale.colaborators.map((colab) => ({
            ...colab,
            sunday: new Date(colab.sunday),
          })),
        }))
      );
      setCurrentScale(updatedScale); // Atualiza a escala atual

      Alert.alert("Sucesso", "Escala atualizada com sucesso!");
      router.replace("/(private)/scales"); // Navega de volta se necessário
    } catch (error) {
      console.error("Erro ao atualizar a escala:", error);
      Alert.alert(
        "Erro",
        "Não foi possível atualizar a escala. Tente novamente."
      );
    }
  }

  function resetScaleInputs() {
    setTitle("");
    setYear(dayjs().format("YYYY"));
    setMonth(String(dayjs().month() + 1));
    setColaborators([]);
    resetColaboratorInputs();
  }

  function resetColaboratorInputs() {
    setColaboratorName("");
    setColaboratorWeekday([]);
    setColaboratorWoman(false);
    setColaboratorSchedule(false);
    setShowColaboratorCard(false);
    setColaboratorSunday(new Date());
  }

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

  const weekdays = [...Array(7)].map((_, i) => ({
    day: i,
    initial: dayjs().day(i).format("dddd").charAt(0).toUpperCase(),
  }));

  function daysSelected(dayNumber: number) {
    return colaboratorWeekday.includes(dayNumber);
  }

  return {
    year,
    title,
    month,
    setYear,
    setTitle,
    setMonth,
    periodScale,
    colaborators,
    daysSelected,
    colaboratorName,
    colaboratorWoman,
    colaboratorSunday,
    colaboratorWeekday,
    colaboratorSchedule,
    setColaborators,
    setColaboratorName,
    setColaboratorWoman,
    setColaboratorSunday,
    setColaboratorWeekday,
    setColaboratorSchedule,
    onSaveScale,
    onRemoveScale,
    onAddColaborator,
    onRemoveColaborator,
    showColaboratorCard,
    setShowColaboratorCard,
    toggleDay,
    weekdays,
    scales,
    loading,
    loadScales,
    onUpdateScale,
    loadScaleById,
    currentScale,
  };
}
