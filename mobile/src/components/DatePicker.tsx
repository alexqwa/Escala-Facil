import dayjs from "dayjs";
import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export function DatePicker() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => setShow(true)}
      className="items-center bg-muted rounded-lg flex-1 py-2 justify-center"
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
      <Text
        allowFontScaling={false}
        className="text-foreground text-sm font-archivo_700"
      >
        {dayjs(date).format("DD/MM/YYYY")}
      </Text>
    </TouchableOpacity>
  );
}
