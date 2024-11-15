import { Button, Card, Input, Layout, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";

export default function NewFamilyScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      familyName: "",
      username: "",
    },
  });

  async function onSubmit(data: { familyName: string; username: string }) {
    console.log(data);

    router.push("/(tabs)/shops");
  }

  return (
    <Layout style={styles.layout}>
      <Card style={styles.card}>
        <Text category="h4" style={styles.title}>
          Criar nova Familia
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              style={styles.input}
              label="Nome da Familia"
              placeholder="Familia Feliz"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="familyName"
        />
        {errors.familyName && (
          <Text style={styles.errorText} status="danger">
            Nome da Familia não pode ser vazio.
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              style={styles.input}
              label="Seu nome de Usuário"
              placeholder="John Doe"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={styles.errorText} status="danger">
            Nome do Usuário não pode ser vazio.
          </Text>
        )}

        <Button style={styles.button} onPress={handleSubmit(onSubmit)}>
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
  },
  input: {
    marginTop: 12,
    marginBottom: 2,
  },
  errorText: {
    marginStart: 8,
  },
  button: {
    marginTop: 24,
    borderRadius: 24,
  },
});
