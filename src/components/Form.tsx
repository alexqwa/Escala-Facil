import dayjs from "dayjs";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface FormType extends TextInputProps {
  title: string;
  changeTitle: (text: string) => void;
}

export function Form({ title, changeTitle, ...rest }: FormType) {
  return (
    <View className="space-y-4">
      <View className="space-y-2">
        <Text className="block text-sm font-archivo_700 text-white ml-2">
          Título
        </Text>
        <TextInput
          {...rest}
          value={title}
          onChangeText={changeTitle}
          className="input-custom w-full bg-[#202024] h-14 rounded-xl px-4 border-2 border-[#202024] text-[#E1E1E6] text-base font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
          placeholder="Nome da escala..."
          placeholderTextColor="#c6c6cc"
          cursorColor="#fff"
        />
      </View>
      <View className="flex-row w-full space-x-4">
        <View className="flex-1 space-y-2">
          <Text className="block text-sm font-archivo_700 text-white ml-2">
            Mês
          </Text>
          <View className="w-full bg-[#202024] h-14 rounded-xl px-4 justify-center">
            <Text className="text-white font-archivo_600 text-base">
              {dayjs().format("MMMM").charAt(0).toUpperCase() +
                dayjs().format("MMMM").slice(1)}
            </Text>
          </View>
        </View>

        <View className="flex-1 space-y-2">
          <Text className="block text-sm font-archivo_700 text-white ml-2">
            Ano
          </Text>
          <View className="w-full bg-[#202024] h-14 rounded-xl px-4 justify-center">
            <Text className="text-white font-archivo_600 text-base">
              {dayjs().format("YYYY")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
