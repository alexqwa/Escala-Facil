import clsx from "clsx";
import dayjs from "dayjs";
import { useState } from "react";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

import { Form } from "@/src/components/Form";
import { Header } from "@/src/components/Header";

export default function Home() {
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().format("YYYY"));

  return (
    <View className="flex-1 items-center bg-[#121214]">
      <Header title="GERAR ESCALA" />
      <View className="max-w-[85%] w-full flex-1 mt-20">
        <Text className="text-white font-archivo_700 text-xl mb-10">
          Faça suas escalas sem complicações.{"\n"}Rápido, prático e de forma
          {"\n"}inteligente!
        </Text>
        <Form
          year={year}
          title={title}
          month={month.toString()}
          onChangeYear={setYear}
          onChangeTitle={setTitle}
          onChangeMonth={(text: string) => setMonth(Number(text))}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={!title || !month || !year}
          onPress={() =>
            router.push({
              pathname: "/editables/[id]",
              params: { id: title, dateMonth: month, dateYear: year },
            })
          }
          className={clsx(
            "w-full mt-6 h-14 bg-[#f7dd43] rounded-xl items-center justify-center",
            {
              ["opacity-70"]: !title || !month || !year,
            }
          )}
        >
          <Text className="text-black font-archivo_700 text-base">
            GERAR ESCALA
          </Text>
        </TouchableOpacity>
        <Text className="text-[#c4c4cc] font-poppins_400 text-sm mt-6 text-center">
          Após gerar sua escala, você será redirecionado{"\n"}para tela onde
          você poderá edita-la.
        </Text>
      </View>
    </View>
  );
}
