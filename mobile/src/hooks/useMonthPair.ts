import dayjs from "dayjs";

interface MonthPairOptions {
  adjustForZeroIndex?: boolean;
}

export function useMonthPair(monthNumber: number, options?: MonthPairOptions) {
  // Ajusta o número do mês se necessário (dayjs usa 0-11, queremos 1-12)
  const adjustedMonth =
    options?.adjustForZeroIndex !== false ? monthNumber - 1 : monthNumber;

  // Obter o mês atual por extenso
  const currentMonth = dayjs()
    .month(adjustedMonth)
    .format("MMMM")
    .replace(/^\w/, (c) => c.toUpperCase());

  // Obter o próximo mês por extenso
  const nextMonthNumber = (adjustedMonth + 1) % 12;
  const nextMonth = dayjs()
    .month(nextMonthNumber)
    .format("MMMM")
    .replace(/^\w/, (c) => c.toUpperCase());

  return `${currentMonth} - ${nextMonth}`;
}
