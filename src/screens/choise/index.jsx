import React from "react";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

import Text from "../../components/text";
import Button from "../../components/button";

const Choise = () => {
  const navigation = useNavigation();

  const goToCompanyRegister = () => {
    navigation.navigate("RegisterCompany");
  };

  const goToDistributionRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <Container>
      <Text style={{ width: "70%", fontSize: 24, color: "#909090" }}>
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>Bem-vindo!</Text>{" "}
        Como deseja utilizar nosso aplicativo?
      </Text>
      <Button
        style={{
          width: "100%",
          height: 70,
          marginTop: 30,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "#d9d9d9",
          alignItems: "flex-start",
          paddingLeft: 10,
        }}
        onPress={goToCompanyRegister}
      >
        <Text style={{ fontSize: 18, color: "#909090", fontWeight: "400" }}>
          Empresa
        </Text>
      </Button>
      <Button
        style={{
          width: "100%",
          height: 70,
          marginTop: 30,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "#d9d9d9",
          alignItems: "flex-start",
          paddingLeft: 10,
        }}
        onPress={goToDistributionRegister}
      >
        <Text style={{ fontSize: 18, color: "#909090", fontWeight: "400" }}>
          Centro de distribuição
        </Text>
      </Button>
    </Container>
  );
};

export default Choise;
