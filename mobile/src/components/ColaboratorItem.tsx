import clsx from "clsx";
import dayjs from "dayjs";
import { Feather } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";

interface ColaboratorProps {
  name: string;
  turn: boolean;
  sunday: number;
  selectedDays: number[];
  onRemove: () => void;
}

export function ColaboratorItem({
  name,
  turn,
  sunday,
  onRemove,
  selectedDays,
}: ColaboratorProps) {
  const weekdays = [...Array(7)].map((_, i) => ({
    day: i,
    initial: dayjs().day(i).format("dddd").charAt(0).toUpperCase(),
  }));

  return (
    <View className="w-full overflow-hidden rounded-xl mb-2 bg-[#202024] divide-y-[1px] divide-[#323238] border border-[#323238]">
      <View className="h-14 flex-row flex-1 divide-x-[1px] divide-[#323238]">
        <View className="flex-1 px-4 justify-center">
          <Text className="text-white font-archivo_600 text-base">{name}</Text>
        </View>
        <View className="w-14 items-center justify-center">
          <Text className="text-white font-archivo_600 text-base">
            {sunday}
          </Text>
        </View>
        <View className="w-12 items-center justify-center">
          <Feather name={turn ? "sun" : "moon"} size={18} color="#fff" />
        </View>
        <TouchableOpacity
          onPress={onRemove}
          activeOpacity={0.7}
          className="w-12 items-center justify-center"
        >
          <Feather name="trash-2" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      <View className="p-4 flex-row justify-between">
        {weekdays.map(({ day, initial }) => {
          const isActive = selectedDays.includes(day);
          return (
            <View
              key={day}
              className={clsx(
                "w-8 h-8 bg-[#323238] rounded-lg transition-all delay-200 items-center justify-center",
                {
                  ["bg-[#F7DD43]"]: isActive,
                }
              )}
            >
              <Text
                className={clsx(
                  "text-white transition-all delay-200 font-poppins_700 text-sm",
                  {
                    ["text-black"]: isActive,
                  }
                )}
              >
                {initial}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
