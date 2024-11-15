import { Button, Card, Input, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default function NewFamilyScreen() {
  async function handleSubmit() {
    console.log("foi");
  }
  return (
    <Layout style={styles.layout}>
      <Card style={styles.card}>
        <Text category="h4" style={styles.title}>
          Criar nova Familia
        </Text>
        <Input style={styles.input} placeholder="Nome da Familia" />
        <Input style={styles.input} placeholder="Seu Nome" />

        <Button style={styles.button} onPress={handleSubmit}>
          Criar Familia
        </Button>
      </Card>
    </Layout>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
  },
  title: {
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 24,
    borderRadius: 24,
  },
});
