import dayjs from "dayjs";
import { useState } from "react";
import { router } from "expo-router";
import { View, Text } from "react-native";

import { Form } from "@/src/components/Form";
import { Header } from "@/src/components/Header";
import { Button } from "@/src/components/Button";

export default function Home() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(dayjs().format("YYYY"));
  const [month, setMonth] = useState(String(dayjs().month() + 1));

  const isDisabled = !title || !month || !year;

  return (
    <View className="flex-1 items-center bg-[#121214]">
      <Header title="GERAR ESCALA" />
      <View className="max-w-[85%] w-full flex-1 mt-20">
        <Text className="text-white font-archivo_700 text-xl mb-10">
          Faça suas escalas sem complicações.{"\n"}Rápido, prático e de forma
          {"\n"}inteligente!
        </Text>
        <Form
          title={title}
          year={year.trim()}
          month={month.trim()}
          onChangeYear={setYear}
          onChangeMonth={setMonth}
          onChangeTitle={setTitle}
        />
        <View className="mt-6" />
        <Button
          isChange
          title="GERAR ESCALA"
          disabled={isDisabled}
          isInactive={isDisabled}
          onPress={() =>
            router.push({
              pathname: "/creation/Scale",
              params: {
                titleParams: title,
                monthParams: month,
                yearParams: year,
              },
            })
          }
        />
        <Text className="text-[#c4c4cc] font-poppins_400 text-sm mt-6 text-center">
          Após gerar sua escala, você será redirecionado{"\n"}para tela onde
          você poderá edita-la.
        </Text>
      </View>
    </View>
  );
}
