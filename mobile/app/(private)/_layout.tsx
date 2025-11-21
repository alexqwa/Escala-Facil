import { Stack } from "expo-router";

export default function StacksLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[id]" />
      <Stack.Screen name="index" />
      <Stack.Screen name="scales" />
      <Stack.Screen name="createScale" />
    </Stack>
  );
}
