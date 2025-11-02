import clsx from "clsx";
import dayjs from "dayjs";
import { Ionicons } from "@expo/vector-icons";
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
    <View className="bg-[#202024] rounded-xl border border-[#323238] divide-y-[1px] divide-[#323238] mb-2">
      <View className="flex-row justify-between h-14 divide-x-[1px] divide-[#323238]">
        <View className="justify-center ml-4 flex-1">
          <Text
            allowFontScaling={false}
            className="text-white font-archivo_600 text-base"
          >
            {name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={onRemove}
          activeOpacity={0.7}
          className="w-14 justify-center items-center"
        >
          <Ionicons name="trash-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <View className="flex-row p-4 justify-between">
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
                allowFontScaling={false}
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
      <View className="p-4 flex-row space-x-2 items-center">
        <View className="bg-[#323238] flex-1 py-2 flex-row items-center justify-center space-x-2 rounded-lg">
          <Ionicons name={woman ? "woman" : "man"} color="#fff" size={18} />
          <Text
            allowFontScaling={false}
            className="text-white font-archivo_600 text-sm"
          >
            {woman ? "Mulher" : "Homem"}
          </Text>
        </View>
        <View className="bg-[#323238] flex-1 py-2 flex-row items-center justify-center space-x-2 rounded-lg">
          <Ionicons name={turn ? "sunny" : "moon"} color="#fff" size={18} />
          <Text
            allowFontScaling={false}
            className="text-white font-archivo_600 text-sm"
          >
            {turn ? "Manhã" : "Tarde"}
          </Text>
        </View>
        <View className="bg-[#323238] flex-1 py-2 flex-row items-center justify-center space-x-2 rounded-lg">
          <Text
            allowFontScaling={false}
            className="text-white font-archivo_600 text-sm"
          >
            {dayjs(sunday).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
    </View>
  );
}
