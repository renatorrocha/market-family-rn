import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        animation: "shift",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="shops"
        options={{
          title: "Compras",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="shopping-basket" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="family-members"
        options={{
          title: "Membros da familia",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="users" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Meu Perfil",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
