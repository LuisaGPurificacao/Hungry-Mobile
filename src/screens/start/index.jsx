import React from "react";
import { Container, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";

import Text from "../../components/text";
import Button from "../../components/button";
import Link from "../../components/link";

const Start = () => {
  const navigation = useNavigation();

  const goToChoiseScreen = () => {
    navigation.navigate("Choise");
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      <Logo source={require("../../assets/Hungry.jpg")} />
      <Logo source={require("../../assets/MainFarm.jpg")} />
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          padding: 10,
          color: "#909090",
        }}
      >
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>
          Compartilhe a comida
        </Text>{" "}
        e ajude na distribuição de alimentos.
      </Text>
      <Text
        style={{
          fontSize: 12,
          textAlign: "center",
          padding: 10,
          color: "#909090",
        }}
      >
        Nem todas as pessoas têm acesso adequado a alimentos, e acreditamos que
        juntos podemos fazer a diferença.
      </Text>
      <Button onPress={goToChoiseScreen} style={{ marginTop: 24 }}>
        Começar Agora
      </Button>
      <Link style={{ marginTop: 10, color: "#909090" }} onPress={goToLogin}>
        Já tem uma conta?{" "}
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>Entrar</Text>
      </Link>
    </Container>
  );
};

export default Start;
