import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { Day } from "@/src/components/Day";

interface ColaboratorProps extends TouchableOpacityProps {
  name: string;
  isSun: boolean;
  onDaysSelected: (selectedDays: number[]) => void;
}

const days = [
  { day: "S", id: 1 },
  { day: "T", id: 2 },
  { day: "Q", id: 3 },
  { day: "Q", id: 4 },
  { day: "S", id: 5 },
  { day: "S", id: 6 },
  { day: "D", id: 7 },
];

export function Colaborator({
  name,
  isSun,
  onDaysSelected,
  ...rest
}: ColaboratorProps) {
  const [activeDays, setActiveDays] = useState<number[]>([]); // State to store selected days

  const toggleDay = (id: number) => {
    setActiveDays((prev) => {
      const newActiveDays = prev.includes(id)
        ? prev.filter((dayId) => dayId !== id) // Remove day if already selected
        : [...prev, id]; // Add day if not selected
      onDaysSelected(newActiveDays); // Pass selected days to parent
      return newActiveDays;
    });
  };

  return (
    <View className="w-full overflow-hidden rounded-xl mb-2 bg-[#202024] divide-y-[1px] divide-[#323238] border border-[#323238]">
      <View className="h-14 flex-row flex-1 divide-x-[1px] divide-[#323238]">
        <View className="flex-1 px-4 justify-center">
          <Text className="text-white font-archivo_600 text-base">{name}</Text>
        </View>
        <View className="w-12 items-center justify-center">
          <Feather name={isSun ? "sun" : "moon"} size={18} color="#fff" />
        </View>
        <TouchableOpacity
          {...rest}
          activeOpacity={0.7}
          className="w-12 items-center justify-center"
        >
          <Feather name="trash-2" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      <View className="p-4 flex-row justify-between">
        {days.map(({ day, id }) => (
          <TouchableOpacity key={id} onPress={() => toggleDay(id)}>
            <Day day={day} isActive={activeDays.includes(id)} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
