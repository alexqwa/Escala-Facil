import { Alert } from "react-native";
import { useEffect, useState } from "react";

import { api } from "../lib/axios";

interface Scale {
  id: number;
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

export function useScale() {
  const [loading, setLoading] = useState(true);
  const [scales, setScales] = useState<Scale[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getScales() {
      try {
        const response = await api.get<Scale[]>("/scales");
        setScales(response.data);
      } catch (error) {
        console.error("Erro ao buscar escalas!", error);
        setError("Erro ao buscar escalas. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    }
    getScales();
  }, []);

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

  return { scales, loading, handleRemoveScale, error };
}
