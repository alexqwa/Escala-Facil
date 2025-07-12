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
        {day}
      </Text>
    </TouchableOpacity>
  );
}
