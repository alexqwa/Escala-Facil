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

  return {
    nextSundaysAfter20th,
  };
}
