import KittenProvider from "@/components/providers/kitten";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <KittenProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </KittenProvider>
  );
}
