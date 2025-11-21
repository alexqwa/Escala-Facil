import dayjs from "dayjs";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

import { Day } from "@/src/components/Day";

interface FormColaboratorCardProps {
  // Colaboradores
  colaboratorName: string;
  colaboratorSunday: Date;
  colaboratorWoman: boolean;
  colaboratorSchedule: boolean;
  onAddColaborator: () => void;
  setColaboratorName: (name: string) => void;
  setColaboratorSunday: (date: Date) => void;
  setColaboratorWoman: (woman: boolean) => void;
  setColaboratorSchedule: (schedule: boolean) => void;

  // Dias
  toggleDay: (day: number) => void;
  daysSelected: (day: number) => boolean;
  weekdays: { day: number; initial: string }[];
}

export function FormColaboratorCard({
  colaboratorName,
  colaboratorWoman,
  colaboratorSunday,
  colaboratorSchedule,
  setColaboratorName,
  setColaboratorWoman,
  setColaboratorSunday,
  setColaboratorSchedule,
  weekdays,
  toggleDay,
  daysSelected,
  onAddColaborator,
}: FormColaboratorCardProps) {
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || colaboratorSunday;
    setShow(false);
    setColaboratorSunday(currentDate);
  };

  return (
    <View className="divide-y divide-border overflow-hidden">
      <TextInput
        autoFocus
        cursorColor="#ededed"
        value={colaboratorName}
        allowFontScaling={false}
        placeholderTextColor="#777777"
        onChangeText={setColaboratorName}
        placeholder="Nome do colaborador"
        className="rounded-t-2xl bg-card text-foreground px-4 text-base font-archivo_600 h-14"
      />
      <View className="p-4 bg-card flex-row items-center justify-between">
        {weekdays.map(({ day, initial }) => (
          <Day
            key={day}
            day={initial}
            isActive={daysSelected(day)}
            onPress={() => toggleDay(day)}
          />
        ))}
      </View>
      <View className="p-4 bg-card flex-row space-x-2">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setColaboratorWoman(!colaboratorWoman)}
          className="items-center bg-muted rounded-lg flex-1 py-2 justify-center"
        >
          <Text
            allowFontScaling={false}
            className="text-foreground text-sm font-archivo_700"
          >
            {!colaboratorWoman ? "Homem" : "Mulher"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setColaboratorSchedule(!colaboratorSchedule)}
          className="items-center bg-muted rounded-lg flex-1 py-2 justify-center"
        >
          <Text
            allowFontScaling={false}
            className="text-foreground text-sm font-archivo_700"
          >
            {!colaboratorSchedule ? "Manhã" : "Tarde"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShow(true)}
          className="items-center bg-muted rounded-lg flex-1 py-2 justify-center"
        >
          {show && (
            <DateTimePicker
              is24Hour
              mode="date"
              display="calendar"
              value={colaboratorSunday}
              onChange={onChange}
            />
          )}
          <Text
            allowFontScaling={false}
            className="text-foreground text-sm font-archivo_700"
          >
            {dayjs(colaboratorSunday).format("DD/MM/YYYY")}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="bg-card p-4 rounded-b-2xl">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onAddColaborator}
          className="bg-foreground h-12 rounded-lg items-center justify-center"
        >
          <Text allowFontScaling={false} className="text-base font-archivo_700">
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
