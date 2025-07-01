import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ColaboratorProps extends TouchableOpacityProps {
  title: string;
}

export function Colaborator({ title, ...rest }: ColaboratorProps) {
  return (
    <View className="w-full overflow-hidden flex-row bg-[#202024] divide-x-[2px] divide-[#323238] rounded-xl h-14 mb-2">
      <View className="flex-1 justify-center px-4">
        <Text className="text-white text-base font-archivo_600">{title}</Text>
      </View>
      <TouchableOpacity {...rest} className="w-14 items-center justify-center">
        <Feather name="sun" size={18} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity {...rest} className="w-14 items-center justify-center">
        <Feather name="trash-2" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
