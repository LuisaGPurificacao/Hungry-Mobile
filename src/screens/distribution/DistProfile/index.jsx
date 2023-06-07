import React, { useState, useEffect } from "react";
import { Container, Header, UpdateDelIcons, EmailArea, Kav } from "./styles";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TextInputMask } from "react-native-masked-text";

import Text from "../../../components/text";
import Input from "../../../components/input";
import Button from "../../../components/button";
import Link from "../../../components/link";

const RegisterFood = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email, token, role, centroId } = route.params;

  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data_validade, setData_validade] = useState("");

  const goToInfos = () => {
    navigation.navigate("CentroInfos", {
      email,
      token,
      role,
    });
  };

  const handleSubmit = async () => {
    if (!nome || !categoria || !quantidade || !data_validade) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const body = {
        nome,
        quantidade,
        categoria,
        data_validade,
        centro_distribuicao: {
          id: centroId,
        },
      };
      console.log(body);
      const response = await fetch(
        `http://192.168.0.5:8080/hungry/api/alimentos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        alert("Alimento criado com sucesso");

        const alimento = response;

        navigation.navigate("CentroInfos", {
          email,
          token,
          role,
          centroId,
          alimento,
        });
      } else {
        alert("Não foi possivel cadastrar o alimento.");
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <Container>
      <Kav
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      ></Kav>
      <Header>
        <UpdateDelIcons>
          <Link>
            <FeatherIcon
              name="user"
              size={25}
              color="#9DC184"
              onPress={goToInfos}
            />
          </Link>
        </UpdateDelIcons>
      </Header>
      <Text
        style={{
          color: "#909090",
          width: "70%",
          fontSize: 24,
          marginTop: 50,
          marginBottom: 30,
        }}
      >
        Insira as informações do{" "}
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>alimento</Text>{" "}
        nos campos abaixo
      </Text>
      <Input
        placeholder="Nome do alimento"
        style={{ marginBottom: 20 }}
        value={nome}
        onChangeText={setNome}
      />
      <Input
        placeholder="Quantidade disponível"
        style={{ marginBottom: 20 }}
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <Input
        placeholder="Categoria"
        style={{ marginBottom: 20 }}
        value={categoria}
        onChangeText={setCategoria}
      />
      <TextInputMask
        type={"datetime"}
        options={{
          format: "DD/MM/YYYY",
        }}
        placeholder="Qual é a data de validade?"
        style={{
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "#cdcdcd",
          width: "100%",
          height: 50,
          borderRadius: 5,
          padding: 10,
        }}
        value={data_validade}
        onChangeText={setData_validade}
      />
      <Input
        placeholder="centro_distribuicao"
        style={{ marginBottom: 20, display: "none" }}
        value={categoria}
      />
      <Input
        placeholder="empresa"
        style={{ marginBottom: 20, display: "none" }}
        value={categoria}
      />
      <Button style={{ width: "100%" }} onPress={handleSubmit}>
        Registrar
      </Button>
    </Container>
  );
};

export default RegisterFood;
