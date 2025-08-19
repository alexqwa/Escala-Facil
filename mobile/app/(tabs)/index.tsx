import dayjs from "dayjs";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text, BackHandler } from "react-native";

import { Form } from "@/src/components/Form";
import { Header } from "@/src/components/Header";
import { ButtonPrimary } from "@/src/components/ButtonPrimary";

export default function Home() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(dayjs().format("YYYY"));
  const [month, setMonth] = useState(String(dayjs().month() + 1));

  const isDisabled = !title || !month || !year;

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

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
        <ButtonPrimary
          title="GERAR ESCALA"
          disabled={isDisabled}
          type={{ yellow: true }}
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
      </View>
    </View>
  );
}
