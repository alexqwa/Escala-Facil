import { View, Text, TextInput } from "react-native";

interface FormType {
  title: string;
  month: string;
  year: string;
  changeTextTitle: (text: string) => void;
  changeTextMonth: (text: string) => void;
  changeTextYear: (text: string) => void;
}

export function Form({
  title,
  month,
  year,
  changeTextTitle,
  changeTextMonth,
  changeTextYear,
}: FormType) {
  return (
    <View className="space-y-4">
      <View className="space-y-2">
        <Text className="block text-sm font-archivo_700 text-white ml-2">
          Título
        </Text>
        <TextInput
          value={title}
          onChangeText={changeTextTitle}
          className="input-custom w-full bg-[#202024] h-14 rounded-xl px-4 border-2 border-[#202024] text-white text-base font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
          placeholder="Nome da escala"
          placeholderTextColor="#E1E1E6"
          cursorColor="#fff"
        />
      </View>
      <View className="flex-row w-full space-x-4">
        <View className="flex-1 space-y-2">
          <Text className="block text-sm font-archivo_700 text-white ml-2">
            Mês
          </Text>
          <TextInput
            value={month}
            onChangeText={changeTextMonth}
            className="input-custom w-full bg-[#202024] h-14 rounded-xl px-4 border-2 border-[#202024] text-white text-base font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
            placeholder="Mês de referência"
            placeholderTextColor="#E1E1E6"
            cursorColor="#fff"
          />
        </View>

        <View className="flex-1 space-y-2">
          <Text className="block text-sm font-archivo_700 text-white ml-2">
            Ano
          </Text>
          <TextInput
            value={year}
            onChangeText={changeTextYear}
            className="input-custom w-full bg-[#202024] h-14 rounded-xl px-4 border-2 border-[#202024] text-white text-base font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
            placeholder="Ano de referência"
            placeholderTextColor="#E1E1E6"
            cursorColor="#fff"
          />
        </View>
      </View>
    </View>
  );
}
