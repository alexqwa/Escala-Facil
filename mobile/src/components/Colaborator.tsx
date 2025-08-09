import clsx from "clsx";
import dayjs from "dayjs";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";

interface ColaboratorProps {
  sunday: Date;
  name: string;
  turn: boolean;
  woman: boolean;
  selectedDays: number[];
  onRemove: () => void;
}

export function Colaborator({
  name,
  turn,
  woman,
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
        <TouchableOpacity
          onPress={onRemove}
          activeOpacity={0.7}
          className="w-14 items-center justify-center"
        >
          <Feather name="trash-2" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      <View className="p-4">
        <View className="flex-row justify-between">
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
      <View className="p-4 flex-row items-center space-x-2">
        <View className="bg-[#323238] flex-1 py-2 flex-row items-center space-x-2 justify-center rounded-lg">
          <Ionicons name={woman ? "woman" : "man"} color="#fff" size={18} />
          <Text className="text-white font-archivo_600 text-sm">
            {woman ? "Mulher" : "Homem"}
          </Text>
        </View>
        <View className="bg-[#323238] flex-1 py-2 flex-row items-center space-x-2 justify-center rounded-lg">
          <Ionicons name={turn ? "sunny" : "moon"} size={18} color="#fff" />
          <Text className="text-white font-archivo_600 text-sm">
            {turn ? "Manhã" : "Tarde"}
          </Text>
        </View>
        <View className="bg-[#323238] flex-1 py-2 flex-row items-center justify-center rounded-lg">
          <Text className="text-white text-sm font-archivo_600">
            {dayjs(sunday).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
    </View>
  );
}
