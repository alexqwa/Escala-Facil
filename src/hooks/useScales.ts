import { router } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@scales_app";

interface ScaleType {
  title: string;
  month: string;
  year: string;
  collaborators: string[];
}

export function useScales() {
  const [scales, setScales] = useState<ScaleType[]>([]);
  const [currentScale, setCurrentScale] = useState<ScaleType>({
    title: "",
    month: "",
    year: "",
    collaborators: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newCollaborator, setNewCollaborator] = useState("");
  const [showCollaboratorInput, setShowCollaboratorInput] = useState(false);

  useEffect(() => {
    loadScales();
  }, []);

  async function loadScales() {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue !== null) {
        setScales(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error("Erro ao carregar escalas:", error);
      throw new Error("Falha ao carregar escalas");
    }
  }

  async function saveScales(scalesToSave: ScaleType[]) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(scalesToSave));
      setScales(scalesToSave);
    } catch (error) {
      console.error("Erro ao salvar escalas:", error);
      throw new Error("Falha ao salvar escalas");
    }
  }

  async function addScale() {
    if (!currentScale?.title || !currentScale?.month || !currentScale.year) {
      throw new Error("Preencha título, mês e ano");
    }

    const newScale = { ...currentScale };
    let updatedScales = [...scales];

    if (isEditing && editingIndex !== null) {
      updatedScales[editingIndex] = newScale;
    } else {
      updatedScales.push(newScale);
    }

    await saveScales(updatedScales);
    resetCurrentScale();
    router.push("/(tabs)/MyScales");
  }

  function editScale(index: number) {
    const scale = scales[index];
    setCurrentScale({
      title: scale.title,
      month: scale.month,
      year: scale.year,
      collaborators: [...scale.collaborators],
    });
    setEditingIndex(index);
    setIsEditing(true);
  }

  async function deleteScale(index: number) {
    const newScales = scales.filter((_, i) => i != index);
    await saveScales(newScales);
  }

  function addCollaborator() {
    if (!newCollaborator.trim()) {
      throw new Error("Digite o nome do colaborador");
    }

    setCurrentScale((prev) => ({
      ...prev,
      collaborators: [...prev.collaborators, newCollaborator],
    }));
    setNewCollaborator("");
    setShowCollaboratorInput(false);
  }

  function removeCollaborator(index: number) {
    setCurrentScale((prev) => {
      const newCollaborators = [...prev.collaborators];
      newCollaborators.splice(index, 1);
      return { ...prev, collaborators: newCollaborators };
    });
  }

  function updatedCurrentScale(
    field: keyof ScaleType,
    value: string | string[]
  ) {
    setCurrentScale((prev) => ({ ...prev, [field]: value }));
  }

  function resetCurrentScale() {
    setCurrentScale({
      title: "",
      month: "",
      year: "",
      collaborators: [],
    });
    setNewCollaborator("");
    setShowCollaboratorInput(false);
    setIsEditing(false);
    setEditingIndex(null);
  }

  return {
    scales,
    currentScale,
    newCollaborator,
    showCollaboratorInput,
    isEditing,
    loadScales,
    addScale,
    editScale,
    deleteScale,
    addCollaborator,
    removeCollaborator,
    updatedCurrentScale,
    setNewCollaborator,
    setShowCollaboratorInput,
    resetCurrentScale,
  };
}
