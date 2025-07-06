// hooks/useScale.ts
import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

interface Colaborator {
  name: string;
  isSun: boolean; // true for sun (day), false for night
}

interface Scale {
  id: string;
  title: string;
  month: string;
  year: string;
  periodScale: string;
  colaborators: Colaborator[];
}

const STORAGE_KEY = "@scales";

const useScale = () => {
  const [scales, setScales] = useState<Scale[]>([]);
  const [currentScale, setCurrentScale] = useState<Scale | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Helper function to generate ID
  const generateId = useCallback(() => {
    return dayjs().valueOf().toString();
  }, []);

  // Helper function to create period scale string
  const createPeriodScale = useCallback((month: string) => {
    const currentMonth = dayjs().month(parseInt(month) - 1);
    const nextMonth = currentMonth.add(1, "month");
    return `${
      currentMonth.format("MMMM").charAt(0).toUpperCase() +
      currentMonth.format("MMMM").slice(1)
    } - ${
      nextMonth.format("MMMM").charAt(0).toUpperCase() +
      nextMonth.format("MMMM").slice(1)
    }`;
  }, []);

  // Load all scales from storage
  const loadScales = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const storedScales = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedScales) {
        setScales(JSON.parse(storedScales));
      }
    } catch (err) {
      setError("Failed to load scales");
      console.error("Failed to load scales:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Get a specific scale by ID
  const getScaleById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const storedScales = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedScales) {
        const scalesList: Scale[] = JSON.parse(storedScales);
        const scale = scalesList.find((s) => s.id === id);
        setCurrentScale(scale || null);
        return scale;
      }
      return null;
    } catch (err) {
      setError("Failed to get scale");
      console.error("Failed to get scale:", err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Save a new scale
  const saveScale = useCallback(
    async (newScale: Omit<Scale, "id" | "periodScale">) => {
      setLoading(true);
      setError(null);
      try {
        const periodScale = createPeriodScale(newScale.month);
        const id = generateId();
        const scaleToSave: Scale = {
          ...newScale,
          id,
          periodScale,
        };

        const storedScales = await AsyncStorage.getItem(STORAGE_KEY);
        let scalesList: Scale[] = [];

        if (storedScales) {
          scalesList = JSON.parse(storedScales);
        }

        scalesList.push(scaleToSave);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(scalesList));
        setScales(scalesList);
        return scaleToSave;
      } catch (err) {
        setError("Failed to save scale");
        console.error("Failed to save scale:", err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [createPeriodScale, generateId]
  );

  // Update an existing scale
  const updateScale = useCallback(
    async (updatedScale: Scale) => {
      setLoading(true);
      setError(null);
      try {
        const storedScales = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedScales) {
          let scalesList: Scale[] = JSON.parse(storedScales);
          const index = scalesList.findIndex((s) => s.id === updatedScale.id);

          if (index !== -1) {
            updatedScale.periodScale = createPeriodScale(updatedScale.month);
            scalesList[index] = updatedScale;
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(scalesList));
            setScales(scalesList);
            setCurrentScale(updatedScale);
            return updatedScale;
          }
        }
        throw new Error("Scale not found");
      } catch (err) {
        setError("Failed to update scale");
        console.error("Failed to update scale:", err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [createPeriodScale]
  );

  // Delete a scale by ID
  const deleteScale = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const storedScales = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedScales) {
        let scalesList: Scale[] = JSON.parse(storedScales);
        const filteredScales = scalesList.filter((s) => s.id !== id);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(filteredScales));
        setScales(filteredScales);
        setCurrentScale(null);
        return true;
      }
      return false;
    } catch (err) {
      setError("Failed to delete scale");
      console.error("Failed to delete scale:", err);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Get all scales
  const getAllScales = useCallback(async () => {
    await loadScales();
    return scales;
  }, [loadScales, scales]);

  // Clear current scale
  const clearCurrentScale = useCallback(() => {
    setCurrentScale(null);
  }, []);

  const removeColaborator = useCallback(
    async (scaleId: string, colaboratorName: string) => {
      setLoading(true);
      setError(null);
      try {
        const storedScales = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedScales) {
          let scalesList: Scale[] = JSON.parse(storedScales);
          const scaleIndex = scalesList.findIndex((s) => s.id === scaleId);

          if (scaleIndex !== -1) {
            const updatedColaborators = scalesList[
              scaleIndex
            ].colaborators.filter((c) => c.name !== colaboratorName);

            const updatedScale = {
              ...scalesList[scaleIndex],
              colaborators: updatedColaborators,
            };

            scalesList[scaleIndex] = updatedScale;
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(scalesList));
            setScales(scalesList);
            if (currentScale && currentScale.id === scaleId) {
              setCurrentScale(updatedScale);
            }

            return true;
          }
        }
        return false;
      } catch (error) {
        setError("Failed to remove colaborator");
        console.error("Failed to remove colaborator", error);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [currentScale]
  );

  // Initialize by loading scales
  useEffect(() => {
    loadScales();
  }, [loadScales]);

  return {
    scales,
    currentScale,
    loading,
    error,
    saveScale,
    getScaleById,
    updateScale,
    deleteScale,
    getAllScales,
    clearCurrentScale,
    createPeriodScale,
    removeColaborator,
  };
};

export { useScale };
