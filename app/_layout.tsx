import KittenProvider from "@/components/providers/kitten";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <KittenProvider>
      <Stack />
    </KittenProvider>
  );
}
