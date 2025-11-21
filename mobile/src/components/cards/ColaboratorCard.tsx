import dayjs from "dayjs";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";

import { Day } from "@/src/components/Day";

interface ColaboratorCardProps {
  sunday: Date;
  name: string;
  woman: boolean;
  schedule: boolean;
  selectedDays: number[];
  onRemoveColaborator: () => void;
  onEdit?: () => void;
  onSave?: (updateData: {
    name: string;
    sunday: Date;
    woman: boolean;
    schedule: boolean;
    selectedDays: number[];
  }) => void;
  onToggleDay?: (day: number) => void;
}

export function ColaboratorCard({
  name,
  woman,
  sunday,
  schedule,
  onSave,
  onToggleDay,
  selectedDays,
  onRemoveColaborator,
}: ColaboratorCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [tempName, setTempName] = useState(name);
  const [tempWoman, setTempWoman] = useState(woman);
  const [tempSunday, setTempSunday] = useState(sunday);
  const [tempSchedule, setTempSchedule] = useState(schedule);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempSelectedDays, setTempSelectedDays] = useState(selectedDays);

  const weekdays = [...Array(7)].map((_, i) => ({
    day: i,
    initial: dayjs().day(i).format("dddd").charAt(0).toUpperCase(),
  }));

  const handleToggleDay = (day: number) => {
    if (isEditing) {
      setTempSelectedDays((prev) =>
        prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
      );
    } else if (onToggleDay) {
      onToggleDay(day);
    }
  };

  function handleSave() {
    if (!tempName.trim() || tempSelectedDays.length === 0) {
      Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
      return;
    }

    if (onSave) {
      onSave({
        name: tempName,
        woman: tempWoman,
        sunday: tempSunday,
        schedule: tempSchedule,
        selectedDays: tempSelectedDays,
      });
    }
    setIsEditing(false);
  }

  function handleCancel() {
    // Restaura valores originais
    setTempName(name);
    setTempWoman(woman);
    setTempSunday(sunday);
    setTempSchedule(schedule);
    setTempSelectedDays(selectedDays);
    setIsEditing(false);
  }

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setTempSunday(selectedDate);
    }
  };

  return (
    <View className="divide-y divide-border overflow-hidden mb-4">
      {isEditing ? (
        <TextInput
          autoFocus
          value={tempName}
          cursorColor="#ededed"
          allowFontScaling={false}
          onChangeText={setTempName}
          placeholderTextColor="#777777"
          placeholder="Nome do colaborador"
          className="rounded-t-2xl bg-card text-foreground px-4 text-base font-archivo_600 h-14"
        />
      ) : (
        <View className="rounded-t-2xl bg-card px-4 justify-center h-14">
          <Text
            allowFontScaling={false}
            className="text-base text-foreground font-archivo_600"
          >
            {name}
          </Text>
        </View>
      )}
      <View className="p-4 bg-card flex-row items-center justify-between">
        {weekdays.map(({ day, initial }) => {
          const isActive = isEditing
            ? tempSelectedDays.includes(day)
            : selectedDays.includes(day);
          return (
            <Day
              disabled={!isEditing && !onToggleDay}
              key={day}
              day={initial}
              isActive={isActive}
              onPress={() => handleToggleDay(day)}
            />
          );
        })}
      </View>
      <View className="p-4 bg-card flex-row space-x-2">
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={!isEditing}
          onPress={() => isEditing && setTempWoman(!tempWoman)}
          className="items-center bg-muted rounded-lg flex-1 py-2 justify-center"
        >
          <Text
            allowFontScaling={false}
            className="text-foreground text-sm font-archivo_700"
          >
            {!tempWoman ? "Homem" : "Mulher"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={!isEditing}
          onPress={() => isEditing && setTempSchedule(!tempSchedule)}
          className="items-center bg-muted rounded-lg flex-1 py-2 justify-center"
        >
          <Text
            allowFontScaling={false}
            className="text-foreground text-sm font-archivo_700"
          >
            {!tempSchedule ? "Manhã" : "Tarde"}
          </Text>
        </TouchableOpacity>
        {isEditing ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowDatePicker(true)}
            className="items-center bg-muted rounded-lg flex-1 py-2 justify-center"
          >
            {showDatePicker && (
              <DateTimePicker
                is24Hour
                mode="date"
                display="calendar"
                value={tempSunday}
                onChange={onDateChange}
              />
            )}
            <Text
              allowFontScaling={false}
              className="text-foreground text-sm font-archivo_600"
            >
              {dayjs(tempSunday).format("DD/MM/YYYY")}
            </Text>
          </TouchableOpacity>
        ) : (
          <View className="items-center bg-muted rounded-lg flex-1 py-2 justify-center">
            <Text
              allowFontScaling={false}
              className="text-foreground text-sm font-archivo_600"
            >
              {dayjs(sunday).format("DD/MM/YYYY")}
            </Text>
          </View>
        )}
      </View>
      <View className="bg-card p-4 rounded-b-2xl">
        {isEditing ? (
          <View className="flex-row space-x-3">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleCancel}
              className="bg-muted border flex-row space-x-2 border-border h-12 rounded-lg items-center flex-1 justify-center"
            >
              <Feather size={20} name="x" color="#ededed" />
              <Text
                allowFontScaling={false}
                className="text-sm text-foreground font-archivo_600"
              >
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleSave}
              className="bg-foreground flex-row space-x-2 h-12 rounded-lg items-center flex-1 justify-center"
            >
              <Feather name="check" size={20} color="#0a0a0a" />
              <Text
                allowFontScaling={false}
                className="text-sm text-background font-archivo_600"
              >
                Salvar
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="flex-row space-x-3">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onRemoveColaborator}
              className="bg-muted border flex-row space-x-2 border-border h-12 rounded-lg items-center flex-1 justify-center"
            >
              <Feather size={20} name="trash-2" color="#ededed" />
              <Text
                allowFontScaling={false}
                className="text-sm text-foreground font-archivo_600"
              >
                Excluir
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setIsEditing(true)}
              className="bg-foreground flex-row space-x-2 h-12 rounded-lg items-center flex-1 justify-center"
            >
              <Feather name="edit-2" size={20} color="#0a0a0a" />
              <Text
                allowFontScaling={false}
                className="text-sm text-background font-archivo_600"
              >
                Editar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
