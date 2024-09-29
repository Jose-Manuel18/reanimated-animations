import { Toast } from "@/components/animated-components/toast/Toast";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Notification() {
  const [showToast, setShowToast] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "blue", height: 100, width: 100 }} />
      <ThemedText style={{ color: "white" }}>Notification</ThemedText>
      <ThemedText>Notification</ThemedText>
      <ThemedText>Notification</ThemedText>
      <ThemedText>Notification</ThemedText>
      <Button
        title="Show Toast"
        onPress={() => {
          setShowToast(true);
        }}
      />

      <Toast
        visible={showToast}
        duration={3000}
        handleClose={setShowToast}
        width={300}
        from="bottom"
        children={
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <ThemedText>saludos desde el toast</ThemedText>
          </View>
        }
      />
      <TextInput
        style={{ backgroundColor: "white", color: "black" }}
        placeholder="Type here to translate!"
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
