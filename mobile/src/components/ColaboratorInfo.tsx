import dayjs from "dayjs";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { Day } from "./Day";

interface ColaboratorInfoProps {
  colaboratorName: string;
  setColaboratorName: (name: string) => void;
  colaboratorTurn: boolean;
  setColaboratorTurn: (turn: boolean) => void;
  colaboratorWoman: boolean;
  setColaboratorWoman: (isWoman: boolean) => void;
  colaboratorSunday: Date;
  setColaboratorSunday: (date: Date) => void;
  weekdays: { day: number; initial: string }[];
  isDaySelected: (day: number) => boolean;
  toggleDay: (day: number) => void;
  handleAddColaborator: () => void;
}

export function ColaboratorInfo({
  colaboratorName,
  setColaboratorName,
  colaboratorTurn,
  setColaboratorTurn,
  colaboratorWoman,
  setColaboratorWoman,
  colaboratorSunday,
  setColaboratorSunday,
  weekdays,
  isDaySelected,
  toggleDay,
  handleAddColaborator,
}: ColaboratorInfoProps) {
  const [show, setShow] = useState(false);

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || colaboratorSunday;
    setShow(false);
    setColaboratorSunday(currentDate);
  };

  return (
    <View className="bg-[#202024] rounded-xl border border-[#323238] divide-y-[1px] divide-[#323238]">
      <View className="flex-row justify-between h-14 divide-x-[1px] divide-[#323238]">
        <TextInput
          autoFocus
          value={colaboratorName}
          onChangeText={setColaboratorName}
          className="flex-1 font-archivo_600 text-base px-4 text-white"
          placeholder="Nome do colaborador"
          placeholderTextColor="#fff"
          cursorColor="#fff"
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleAddColaborator}
          className="w-14 justify-center items-center"
        >
          <Ionicons name="add-circle-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <View className="flex-row p-4 justify-between">
        {weekdays.map(({ day, initial }) => (
          <Day
            key={day}
            day={initial}
            isActive={isDaySelected(day)}
            onPress={() => toggleDay(day)}
          />
        ))}
      </View>
      <View className="p-4 flex-row space-x-2 items-center">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setColaboratorWoman(!colaboratorWoman)}
          className="bg-[#323238] flex-1 py-2 flex-row items-center space-x-2 justify-center rounded-lg"
        >
          <Ionicons
            name={colaboratorWoman ? "woman" : "man"}
            color="#fff"
            size={18}
          />
          <Text className="text-white font-archivo_600 text-sm">
            {colaboratorWoman ? "Mulher" : "Homem"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setColaboratorTurn(!colaboratorTurn)}
          className="bg-[#323238] flex-1 py-2 flex-row items-center space-x-2 justify-center rounded-lg"
        >
          <Ionicons
            name={colaboratorTurn ? "sunny" : "moon"}
            size={18}
            color="#fff"
          />
          <Text className="text-white font-archivo_600 text-sm">
            {colaboratorTurn ? "Manhã" : "Tarde"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-[#323238] flex-1 py-2 flex-row items-center justify-center rounded-lg"
          activeOpacity={0.7}
          onPress={() => setShow(true)}
        >
          {show && (
            <DateTimePicker
              is24Hour
              mode="date"
              display="calendar"
              value={colaboratorSunday}
              onChange={onChangeDate}
            />
          )}
          <Text className="text-white text-sm font-archivo_600">
            {dayjs(colaboratorSunday).format("DD/MM/YYYY")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
