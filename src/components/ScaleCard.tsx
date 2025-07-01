import { Feather } from "@expo/vector-icons";
import dayjs from "dayjs";
import { View, Text, TouchableOpacity } from "react-native";

interface ScaleProps {
  title: string;
  timestamp: string;
  quantCollaborators: number;
  deleteScale: () => void;
  editScale: () => void;
}

export function ScaleCard({
  title,
  timestamp,
  quantCollaborators,
  deleteScale,
  editScale,
}: ScaleProps) {
  return (
    <View className="bg-[#202024] rounded-xl flex-row overflow-hidden mb-4">
      <View className="space-y-4 p-4 flex-1">
        <Text className="text-base font-archivo_700 text-white">
          ESCALA: {title}
        </Text>
        <View className="flex-row space-x-4 items-center">
          <View className="flex-row items-center space-x-2">
            <Feather name="calendar" color="#fff" size={16} />
            <Text className="text-white font-archivo_600">{timestamp}</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Feather name="user" size={16} color="#fff" />
            <Text className="text-white font-archivo_600">
              {quantCollaborators}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row space-x-2 mr-4 items-center">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={editScale}
          className="items-center h-12 w-12 rounded-xl justify-center bg-[#121214]"
        >
          <Feather name="edit" size={18} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={deleteScale}
          className="items-center h-12 w-12 rounded-xl justify-center bg-[#121214]"
        >
          <Feather name="trash-2" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
