import dayjs from "dayjs";
import { useMemo } from "react";

export function useDates() {
  const nextSundaysAfter20th = (
    year: number,
    month: number,
    count: number = 5
  ) => {
    const sundays = useMemo(() => {
      let currentDate = dayjs(new Date(year, month - 1, 20));
      const result: string[] = [];
      if (currentDate.day() !== 0) {
        currentDate = currentDate.day(7);
      }
      for (let i = 0; i < count; i++) {
        result.push(currentDate.format("DD/MM/YYYY"));
        currentDate = currentDate.add(7, "days");
      }
      return result;
    }, [year, month, count]);
    return sundays;
  };

  function getDatesEvery28Days(startDate: Date, count = 30) {
    // Parse the start date using dayjs (make sure dayjs is imported)
    let currentDate = dayjs(startDate, "DD/MM/YYYY");
    const result = [];

    for (let i = 0; i < count; i++) {
      // Add the current date to results in DD/MM/YYYY format
      result.push(currentDate.format("DD/MM/YYYY"));
      // Add 27 days to the current date
      currentDate = currentDate.add(28, "days");
    }

    return result;
  }

  function getAlternateSundays(startDate: Date, count = 5) {
    const result = [];
    let currentDate = dayjs(startDate);
    let includeSunday = true;

    // Encontra o primeiro domingo a partir da data inicial
    while (currentDate.day() !== 0) {
      currentDate = currentDate.add(1, "day");
    }

    // Coletar os domingos alternados
    while (result.length < count) {
      if (includeSunday) {
        result.push(currentDate.format("DD/MM/YYYY"));
      }
      includeSunday = !includeSunday;
      currentDate = currentDate.add(7, "day");
    }

    return result;
  }

  return {
    nextSundaysAfter20th,
    getDatesEvery28Days,
    getAlternateSundays,
  };
}
