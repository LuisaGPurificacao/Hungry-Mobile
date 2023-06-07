import { React, useState } from "react";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";

import Text from "../../../components/text";
import Input from "../../../components/input";
import Button from "../../../components/button";
import Link from "../../../components/link";

const RegisterCompany = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [nome_fantasia, setNome_fantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [descricao, setDescricao] = useState("");

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const handleDescricaoChange = (descricao) => {
    if (descricao.length <= 255) {
      setDescricao(descricao);
    } else {
      alert(
        "Limite de caracteres excedido",
        "A descrição deve ter no máximo 255 caracteres"
      );
    }
  };

  const handleSubmit = () => {
    if (!nome || !email || !nome_fantasia || !cnpj || !descricao) {
      alert("Preencha todos os campos");
      return;
    }

    if (!isValidEmail(email)) {
      alert("E-mail inválido");
      return;
    }

    const cnpjWithoutSpecialChars = cnpj.replace(/[-./]/g, "");

    navigation.navigate("AddressCompany", {
      nome,
      nome_fantasia,
      cnpj: cnpjWithoutSpecialChars,
      email,
      descricao,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
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
        Insira as informações da{" "}
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>
          sua empresa
        </Text>{" "}
        nos campos abaixo
      </Text>
      <Input
        placeholder="Nome da empresa"
        style={{ marginBottom: 20 }}
        value={nome}
        onChangeText={setNome}
      />
      <Input
        placeholder="Nome fantasia"
        style={{ marginBottom: 20 }}
        value={nome_fantasia}
        onChangeText={setNome_fantasia}
      />
      <TextInputMask
        type={"cnpj"}
        placeholder="CNPJ"
        style={{
          marginBottom: 20,
          borderWidth: 1,
          height: 50,
          borderRadius: 5,
          borderColor: "#cdcdcd",
          padding: 10,
        }}
        value={cnpj}
        onChangeText={setCnpj}
        options={{
          mask: "99.999.999/9999-99",
        }}
      />
      <Input
        placeholder="E-mail"
        style={{ marginBottom: 20 }}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Descrição"
        style={{ marginBottom: 20 }}
        value={descricao}
        onChangeText={handleDescricaoChange}
      />
      <Button style={{ width: "100%" }} onPress={handleSubmit}>
        Continuar
      </Button>
      <Link style={{ marginTop: 10, color: "#909090" }} onPress={goToLogin}>
        Já tem uma conta?{" "}
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>Entrar</Text>
      </Link>
    </Container>
  );
};

export default RegisterCompany;
