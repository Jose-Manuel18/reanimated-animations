import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        options={{
          title: "Carousel",
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          title: "Toast",
        }}
        name="notification"
      />
    </Tabs>
  );
}
