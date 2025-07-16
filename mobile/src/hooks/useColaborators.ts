import dayjs from "dayjs";
import { useState } from "react";
import { Alert } from "react-native";

interface Colaborator {
  name: string;
  turn: boolean;
  sunday: number;
  weekday: number[];
}

export function useColaborators() {
  const [colaborators, setColaborators] = useState<Colaborator[]>([]);
  const [colaboratorName, setColaboratorName] = useState("");
  const [colaboratorTurn, setColaboratorTurn] = useState(true);
  const [colaboratorSunday, setColaboratorSunday] = useState(0);
  const [colaboratorWeekday, setColaboratorWeekday] = useState<number[]>([]);
  const [showColaboratorInput, setShowColaboratorInput] = useState(false);

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
      "Remover Colaborador",
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
        return prev.filter((day) => day !== dayNumber);
      } else {
        return [...prev, dayNumber];
      }
    });
  }

  function isDaySelected(dayNumber: number) {
    return colaboratorWeekday.includes(dayNumber);
  }

  return {
    weekdays,
    toggleDay,
    colaborators,
    isDaySelected,
    colaboratorName,
    colaboratorTurn,
    colaboratorSunday,
    colaboratorWeekday,
    setColaboratorName,
    setColaboratorTurn,
    setColaboratorSunday,
    handleAddColaborator,
    showColaboratorInput,
    handleRemoveColaborator,
    setShowColaboratorInput,
  };
}
