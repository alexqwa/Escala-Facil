import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx";
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";

interface ButtonPrimaryProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  disabled: boolean;
  isLoading?: boolean;
  type?: {
    yellow?: boolean;
    dark?: boolean;
  };
  icon?: keyof typeof Ionicons.glyphMap;
}

export function ButtonPrimary({
  title,
  isLoading = false,
  disabled,
  type,
  icon,
  color,
  ...rest
}: ButtonPrimaryProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      disabled={disabled || isLoading}
      className={clsx(
        "items-center justify-center h-14 rounded-xl bg-green-500",
        {
          ["opacity-70"]: disabled || isLoading,
          ["bg-[#F7DD43]"]: type?.yellow,
          ["bg-[#202024]"]: type?.dark,
        }
      )}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={type?.yellow ? "#000" : "#fff"}
        />
      ) : (
        <View
          className={clsx("flex-row justify-center items-center", {
            ["space-x-2"]: icon,
          })}
        >
          <Ionicons name={icon} size={20} color={color} />
          <Text
            className={clsx("text-white uppercase text-base font-archivo_600", {
              ["text-black"]: type?.yellow,
            })}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
