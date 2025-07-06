import clsx from "clsx";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ColaboratorProps extends TouchableOpacityProps {
  name: string;
  isSun: boolean;
}

export function Colaborator({ name, isSun, ...rest }: ColaboratorProps) {
  const [isBreakShift, setIsBreakShift] = useState(false);

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
      <View className="p-4 flex-row justify-around">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsBreakShift(!isBreakShift)}
          className={clsx(
            "w-8 h-8 bg-[#323238] rounded-lg transition-all delay-200 items-center justify-center",
            {
              ["bg-[#F7DD43]"]: isBreakShift,
            }
          )}
        >
          <Text
            className={clsx(
              "text-white transition-all delay-200 font-poppins_700 text-sm",
              {
                ["text-black"]: isBreakShift,
              }
            )}
          >
            S
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsBreakShift(!isBreakShift)}
          className={clsx(
            "w-8 h-8 bg-[#323238] rounded-lg transition-all delay-200 items-center justify-center",
            {
              ["bg-[#F7DD43]"]: isBreakShift,
            }
          )}
        >
          <Text
            className={clsx(
              "text-white transition-all delay-200 font-poppins_700 text-sm",
              {
                ["text-black"]: isBreakShift,
              }
            )}
          >
            S
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsBreakShift(!isBreakShift)}
          className={clsx(
            "w-8 h-8 bg-[#323238] rounded-lg transition-all delay-200 items-center justify-center",
            {
              ["bg-[#F7DD43]"]: isBreakShift,
            }
          )}
        >
          <Text
            className={clsx(
              "text-white transition-all delay-200 font-poppins_700 text-sm",
              {
                ["text-black"]: isBreakShift,
              }
            )}
          >
            S
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsBreakShift(!isBreakShift)}
          className={clsx(
            "w-8 h-8 bg-[#323238] rounded-lg transition-all delay-200 items-center justify-center",
            {
              ["bg-[#F7DD43]"]: isBreakShift,
            }
          )}
        >
          <Text
            className={clsx(
              "text-white transition-all delay-200 font-poppins_700 text-sm",
              {
                ["text-black"]: isBreakShift,
              }
            )}
          >
            S
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsBreakShift(!isBreakShift)}
          className={clsx(
            "w-8 h-8 bg-[#323238] rounded-lg transition-all delay-200 items-center justify-center",
            {
              ["bg-[#F7DD43]"]: isBreakShift,
            }
          )}
        >
          <Text
            className={clsx(
              "text-white transition-all delay-200 font-poppins_700 text-sm",
              {
                ["text-black"]: isBreakShift,
              }
            )}
          >
            S
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsBreakShift(!isBreakShift)}
          className={clsx(
            "w-8 h-8 bg-[#323238] rounded-lg transition-all delay-200 items-center justify-center",
            {
              ["bg-[#F7DD43]"]: isBreakShift,
            }
          )}
        >
          <Text
            className={clsx(
              "text-white transition-all delay-200 font-poppins_700 text-sm",
              {
                ["text-black"]: isBreakShift,
              }
            )}
          >
            S
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsBreakShift(!isBreakShift)}
          className={clsx(
            "w-8 h-8 bg-[#323238] rounded-lg transition-all delay-200 items-center justify-center",
            {
              ["bg-[#F7DD43]"]: isBreakShift,
            }
          )}
        >
          <Text
            className={clsx(
              "text-white transition-all delay-200 font-poppins_700 text-sm",
              {
                ["text-black"]: isBreakShift,
              }
            )}
          >
            S
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
