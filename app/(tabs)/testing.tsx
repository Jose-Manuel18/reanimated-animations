import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Testing() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1727461567487-575ec98777fc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Nombres */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombres</Text>
        <TextInput placeholder="Nombres" style={styles.input} />
      </View>

      {/* Apellidos */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Apellidos</Text>
        <TextInput placeholder="Apellidos" style={styles.input} />
      </View>

      {/* Fecha de nacimiento */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fecha de nacimiento</Text>
        <View style={styles.datePickerContainer}>
          <TouchableOpacity style={styles.datePicker}>
            <Text style={styles.datePickerText}>Día</Text>
            {/* <ChevronDown /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.datePicker}>
            <Text style={styles.datePickerText}>Mes</Text>
            {/* <ChevronDown /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.datePicker}>
            <Text style={styles.datePickerText}>Año</Text>
            {/* <ChevronDown /> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Sexo */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sexo</Text>
        <TouchableOpacity style={styles.selectInput}>
          <Text style={styles.selectInputText}>Sexo</Text>
          {/* <ChevronDown /> */}
        </TouchableOpacity>
      </View>

      {/* Teléfono */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Teléfono</Text>
        <TextInput placeholder="Teléfono" style={styles.input} keyboardType="phone-pad" />
      </View>

      {/* Tipo de documento y Número */}
      <View style={styles.rowContainer}>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>Tipo de documento</Text>
          <TouchableOpacity style={styles.selectInput}>
            <Text style={styles.selectInputText}>Documento</Text>
            {/* <ChevronDown /> */}
          </TouchableOpacity>
        </View>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>Número</Text>
          <TextInput placeholder="Número" style={styles.input} keyboardType="numeric" />
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Cancelar</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        ¿Ya tienes cuenta?{" "}
        <Text
          style={styles.footerLink}
          onPress={() => {
            /* Navigate to login */
          }}
        >
          Inicia sesión
        </Text>
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
  logo: {
    width: 183,
    height: 64,
    marginBottom: 24,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    color: "#585757",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#EEF2F5",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 45,
  },
  datePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datePicker: {
    flex: 1,
    backgroundColor: "#EEF2F5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 45,
    marginRight: 8,
  },
  datePickerText: {
    flex: 1,
    color: "#585757",
  },
  selectInput: {
    backgroundColor: "#EEF2F5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 45,
  },
  selectInputText: {
    flex: 1,
    color: "#585757",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "48%",
  },
  primaryButton: {
    backgroundColor: "#16827D",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  secondaryButton: {
    borderColor: "#585757",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
  },
  secondaryButtonText: {
    color: "#585757",
    fontSize: 16,
  },
  footerText: {
    color: "#585757",
    fontSize: 14,
    textAlign: "center",
  },
  footerLink: {
    color: "#16827D",
    textDecorationLine: "underline",
  },
});
