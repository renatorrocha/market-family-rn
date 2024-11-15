import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Button, Card, Layout, Text } from "@ui-kitten/components";
import { Link } from "expo-router";

export default function IndexScreen() {
  return (
    <Layout style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: "/placeholder.svg?height=100&width=100" }}
          style={styles.logo}
        />
        <Text category="h1" style={styles.title}>
          Bem-vindo à Família
        </Text>
      </View>

      <Card style={styles.card}>
        <Text category="h6" style={styles.cardTitle}>
          Escolha uma opção
        </Text>
        <Link href="/(auth)/new-family" asChild>
          <Button style={styles.button}>Criar Família</Button>
        </Link>
        <Button style={styles.button} appearance="outline">
          Entrar em uma Família existente
        </Button>
      </Card>

      <Text style={styles.footer}>© @renatorrocha</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
  },
  cardTitle: {
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginVertical: 10,
    borderRadius: 24,
  },
  footer: {
    marginBottom: 20,
    opacity: 0.5,
  },
});
