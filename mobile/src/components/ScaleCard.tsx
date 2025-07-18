import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ScaleCardProps extends TouchableOpacityProps {
  title: string;
  periodScale: string;
  colaborators: number;
  onRemove: () => Promise<void>;
}

export function ScaleCard({
  title,
  periodScale,
  colaborators,
  onRemove,
  ...rest
}: ScaleCardProps) {
  return (
    <View className="bg-[#202024] rounded-xl flex-row overflow-hidden mb-4">
      <View className="space-y-4 p-4 flex-1">
        <Text className="text-base font-archivo_700 uppercase text-white">
          {title}
        </Text>
        <View className="flex-row space-x-4 items-center">
          <View className="flex-row items-center space-x-2">
            <Feather name="calendar" color="#fff" size={16} />
            <Text className="text-white font-archivo_600">{periodScale}</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Feather name="user" size={16} color="#fff" />
            <Text className="text-white font-archivo_600">{colaborators}</Text>
          </View>
        </View>
      </View>
      <View className="flex-row mr-4 items-center">
        <TouchableOpacity
          {...rest}
          activeOpacity={0.7}
          className="items-center h-12 w-12 rounded-xl justify-center"
        >
          <Feather name="edit" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onRemove}
          className="items-center h-12 w-12 rounded-xl justify-center"
        >
          <Feather name="trash-2" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
