import clsx from "clsx";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface DayProps extends TouchableOpacityProps {
  day: string;
  isActive: boolean;
}

export function Day({ day, isActive, ...rest }: DayProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className={clsx(
        "w-8 h-8 bg-[#323238] rounded-lg items-center justify-center",
        {
          ["bg-[#F7DD43]"]: isActive,
        }
      )}
    >
      <Text
        allowFontScaling={false}
        className={clsx("text-white font-poppins_700 text-sm", {
          ["text-black"]: isActive,
        })}
      >
        {day}
      </Text>
    </TouchableOpacity>
  );
}
