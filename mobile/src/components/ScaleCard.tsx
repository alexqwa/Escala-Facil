import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ScaleCardProps extends TouchableOpacityProps {
  title: string;
  onRemove: () => Promise<void>;
}

export function ScaleCard({ title, onRemove, ...rest }: ScaleCardProps) {
  return (
    <View className="bg-[#202024] rounded-xl py-3 flex-row overflow-hidden mb-4">
      <View className="space-y-4 p-4 flex-1">
        <Text
          allowFontScaling={false}
          className="text-base font-archivo_700 uppercase text-white"
        >
          {title}
        </Text>
      </View>
      <View className="flex-row space-x-3 mr-4 items-center">
        <TouchableOpacity
          {...rest}
          activeOpacity={0.7}
          className="items-center bg-[#121214] h-12 w-12 rounded-xl justify-center"
        >
          <Feather name="edit" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onRemove}
          className="items-center bg-[#121214] h-12 w-12 rounded-xl justify-center"
        >
          <Feather name="trash-2" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
