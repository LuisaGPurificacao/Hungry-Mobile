import { React, useState } from "react";
import { Container } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

import Text from "../../../components/text";
import Button from "../../../components/button";

const Operation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [funcionamento, setFuncionamento] = useState("");

  const handleFuncionamentoChange = (value) => {
    setFuncionamento(value);
  };

  const handleSubmit = () => {
    if (!funcionamento) {
      alert("Preencha o campo");
      return;
    }

    const { nome, email, capacidade, armazenamento, descricao, endereco } =
      route.params;

    navigation.navigate("Password", {
      nome,
      email,
      armazenamento,
      capacidade,
      descricao,
      endereco,
      funcionamento,
    });
  };

  return (
    <Container>
      <Text
        style={{
          color: "#909090",
          width: "70%",
          fontSize: 24,
          marginBottom: 30,
        }}
      >
        Insira as informações do{" "}
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>
          centro de distribuição
        </Text>{" "}
        nos campos abaixo
      </Text>
      <CheckBox
        checked={funcionamento === "De segunda a sexta"}
        onPress={() => handleFuncionamentoChange("De segunda a sexta")}
        title="De segunda a sexta"
        containerStyle={{
          margin: 0,
          marginLeft: 0,
          marginBottom: 10,
          padding: 0,
          backgroundColor: "transparent",
          borderWidth: 0,
          width: 307,
        }}
        checkedColor="#9DC184"
        uncheckedColor="#9DC184"
        titleProps={{
          style: {
            color: "#9DC184",
            marginLeft: 10,
            fontSize: 16,
            fontWeight: "bold",
            width: "100%",
          },
        }}
      />
      <CheckBox
        checked={funcionamento === "Apenas finais de semana"}
        onPress={() => handleFuncionamentoChange("Apenas finais de semana")}
        title="Apenas finais de semana"
        containerStyle={{
          margin: 0,
          marginLeft: 0,
          marginBottom: 10,
          padding: 0,
          backgroundColor: "transparent",
          width: 307,
          borderWidth: 0,
        }}
        checkedColor="#9DC184"
        uncheckedColor="#9DC184"
        titleProps={{
          style: {
            color: "#9DC184",
            marginLeft: 10,
            fontSize: 16,
            fontWeight: "bold",
            width: "100%",
          },
        }}
      />
      <CheckBox
        checked={funcionamento === "Todos os dias"}
        onPress={() => handleFuncionamentoChange("Todos os dias")}
        title="Todos os dias"
        containerStyle={{
          margin: 0,
          marginLeft: 0,
          marginBottom: 30,
          padding: 0,
          backgroundColor: "transparent",
          width: 307,
          borderWidth: 0,
        }}
        checkedColor="#9DC184"
        uncheckedColor="#9DC184"
        titleProps={{
          style: {
            color: "#9DC184",
            marginLeft: 10,
            fontSize: 16,
            fontWeight: "bold",
            width: "100%",
          },
        }}
      />
      <Button style={{ width: "100%" }} onPress={handleSubmit}>
        Continuar
      </Button>
    </Container>
  );
};

export default Operation;
