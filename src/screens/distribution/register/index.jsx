import { React, useState } from "react";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

import Text from "../../../components/text";
import Input from "../../../components/input";
import Button from "../../../components/button";
import Link from "../../../components/link";

const Register = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [armazenamento, setArmazenamento] = useState("");
  const [capacidade, setCapacidade] = useState("");
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

  const handleArmazenamentoChange = (valor) => {

    if (/^\d*$/.test(valor)) {
      if (valor.length === 3) {
        setArmazenamento(valor + "kg");
      } else {
        setArmazenamento(valor);
      }
    }
  };

  const handleCapacidadeChange = (valor) => {
    if (/^\d*$/.test(valor)) {
      if (valor.length === 3) {
        setCapacidade(valor + "kg");
      } else {
        setCapacidade(valor);
      }
    }
  };

  const handleSubmit = () => {
    if (!nome || !email || !armazenamento || !capacidade || !descricao) {
      alert("Preencha todos os campos");
      return;
    }

    if (!isValidEmail(email)) {
      alert("E-mail inválido");
      return;
    }

    navigation.navigate("Adress", {
      nome,
      email,
      armazenamento,
      capacidade,
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
        Insira as informações do{" "}
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>
          centro de distribuição
        </Text>{" "}
        nos campos abaixo
      </Text>
      <Input
        placeholder="Nome do centro de distribuição"
        style={{ marginBottom: 20 }}
        value={nome}
        onChangeText={setNome}
      />
      <Input
        placeholder="E-mail"
        style={{ marginBottom: 20 }}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Capacidade de armazenamento"
        style={{ marginBottom: 20 }}
        value={capacidade}
        onChangeText={handleCapacidadeChange}
      />
      <Input
        placeholder="Armazenamento atual"
        style={{ marginBottom: 20 }}
        value={armazenamento}
        onChangeText={handleArmazenamentoChange}
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

export default Register;
