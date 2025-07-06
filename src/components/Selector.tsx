import clsx from "clsx";
import dayjs from "dayjs";
import React, { useCallback, useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  Easing,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";

interface SelectorProps {
  placeholder?: string;
  onSelect: (id: number, label: string) => void;
}

export function Selector({ onSelect, placeholder }: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [height] = useState(new Animated.Value(0));
  const [rotation] = useState(new Animated.Value(0));
  const [selectedValue, setSelectedValue] = useState<
    { id: number; label: string } | undefined
  >();

  const options = [];
  for (let i = 0; i < 12; i++) {
    const month = dayjs().month(i);
    options.push({
      id: month.month() + 1,
      label:
        month.format("MMMM").charAt(0).toUpperCase() +
        month.format("MMMM").slice(1),
    });
  }

  const toggleSelector = () => {
    setIsOpen(!isOpen);
    Animated.parallel([
      Animated.timing(height, {
        toValue: isOpen ? 0 : options.length * options.length,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(rotation, {
        toValue: isOpen ? 0 : 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotateAnimation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const selectedOptionLabel = selectedValue?.label || placeholder;

  return (
    <View className="w-full mt-2">
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={toggleSelector}
        className={clsx(
          "flex-row justify-between items-center h-14 p-4 bg-[#202024] rounded-xl",
          {
            ["rounded-b-none transition-all delay-200 border-b border-[#121214]"]:
              isOpen,
          }
        )}
      >
        <Text className="text-base font-archivo_600 text-white">
          {selectedOptionLabel}
        </Text>
        <Animated.View style={{ transform: [{ rotate: rotateAnimation }] }}>
          <Feather name="chevron-down" size={18} color="#fff" />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        className="overflow-hidden bg-[#202024] rounded-b-xl"
        style={[{ height }]}
      >
        <FlatList
          data={options}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setSelectedValue(item);
                onSelect(item.id, item.label);
                toggleSelector();
              }}
              className="p-4 border-b border-[#121214]"
            >
              <Text className="text-white font-archivo_600 text-sm">
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </View>
  );
}
