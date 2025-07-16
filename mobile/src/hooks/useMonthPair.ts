import dayjs from "dayjs";

interface MonthPairOptions {
  adjustForZeroIndex?: boolean;
}

export function useMonthPair(monthNumber: number, options?: MonthPairOptions) {
  const adjustedMonth =
    options?.adjustForZeroIndex !== false ? monthNumber - 1 : monthNumber;

  const currentMonth = dayjs()
    .month(adjustedMonth)
    .format("MMMM")
    .replace(/^\w/, (c) => c.toUpperCase());

  const nextMonthNumber = (adjustedMonth + 1) % 12;
  const nextMonth = dayjs()
    .month(nextMonthNumber)
    .format("MMMM")
    .replace(/^\w/, (c) => c.toUpperCase());

  return `${currentMonth} - ${nextMonth}`;
}
