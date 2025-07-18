import clsx from "clsx";
import { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isDark?: boolean;
  isChange?: boolean;
  isInactive?: boolean;
  children?: ReactNode;
  isLoading: boolean;
}

export function Button({
  title,
  isDark,
  isChange,
  children,
  isLoading,
  isInactive,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className={clsx(
        "bg-green-500 h-14 rounded-xl items-center justify-center flex-row space-x-3 w-full",
        {
          ["opacity-70"]: isInactive,
          ["bg-[#202024]"]: isDark,
          ["bg-[#F7DD43]"]: isChange,
        }
      )}
    >
      {children}
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFf" />
      ) : (
        <Text
          className={clsx("text-white text-base font-archivo_700", {
            ["text-black"]: isChange,
            ["font-archivo_600"]: isDark,
            ["text-[#c6c6cc]"]: isDark,
          })}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
