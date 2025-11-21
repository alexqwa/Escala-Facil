import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ScaleCardProps extends TouchableOpacityProps {
  title: string;
  period: string;
  onEdit?: () => void;
  onDelete?: () => Promise<void>;
}

export function ScaleCard({ title, period, onEdit, onDelete }: ScaleCardProps) {
  return (
    <View className="bg-muted mb-4 border-border border rounded-2xl w-full divide-y overflow-hidden divide-border">
      <View className="p-4">
        <Text
          allowFontScaling={false}
          className="text-foreground text-xl font-archivo_700"
        >
          {title}
        </Text>
        <Text
          allowFontScaling={false}
          className="text-muted_foreground font-archivo_600 text-sm"
        >
          {period}
        </Text>
      </View>
      <View className="flex-row items-center justify-center space-x-4 p-4">
        <TouchableOpacity
          onPress={onEdit}
          activeOpacity={0.8}
          className="flex-1 bg-foreground flex-row items-center justify-center space-x-2 p-4 rounded-lg"
        >
          <Feather name="edit-2" size={20} color="#0a0a0a" />
          <Text
            allowFontScaling={false}
            className="text-background text-sm font-archivo_600"
          >
            Editar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onDelete}
          activeOpacity={0.8}
          className="flex-1 bg-card border-border border flex-row items-center justify-center space-x-2 p-4 rounded-lg"
        >
          <Feather name="trash-2" size={20} color="#ededed" />
          <Text
            allowFontScaling={false}
            className="text-[#ededed] font-archivo_600 text-sm"
          >
            Excluir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
