import dayjs from "dayjs";
import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export function DatePicker() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <TouchableOpacity
      className="px-3 border-l border-[#323238] items-center justify-center"
      activeOpacity={0.7}
      onPress={() => setShow(true)}
    >
      {show && (
        <DateTimePicker
          is24Hour
          mode="date"
          value={date}
          display="calendar"
          onChange={onChange}
        />
      )}
      <Text className="text-white text-base font-archivo_600">
        {dayjs(date).format("DD/MM/YYYY")}
      </Text>
    </TouchableOpacity>
  );
}
