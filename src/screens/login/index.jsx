import React, { useState } from "react";
import { Container } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import Text from "../../components/text";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "../../components/link";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const goToChoise = () => {
    navigation.navigate("Choise");
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleSenhaChange = (value) => {
    setSenha(value);
  };

  const signIn = async () => {
    if (!email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    const loginInfos = {
      email: email.trim(),
      senha: senha.trim(),
    };

    console.log(loginInfos);

    try {
      const response = await fetch(
        `http://192.168.0.5:8080/hungry/api/login`,
        {
          method: "POST",
          body: JSON.stringify(loginInfos),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        console.log("Login realizado com sucesso");
        console.log(data)

        if (data.role === "EMPRESA") {
          navigation.navigate("Profile", {
            email,
            token,
            role: data.role,
          });
        } else if (data.role === "CENTRO") {
          navigation.navigate("CentroInfos", {
            email,
            token,
            role: data.role,
          });
        } else {
          throw new Error("Papel de usuário desconhecido");
        }
      } else {
        throw new Error("Ocorreu um erro ao fazer login.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocorreu um erro ao fazer login. Tente novamente mais tarde.");
    }
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
        Realize{" "}
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>login</Text>
      </Text>
      <Input
        placeholder="E-mail"
        style={{ marginBottom: 20 }}
        value={email}
        onChangeText={handleEmailChange}
      />
      <Input
        placeholder="Senha"
        style={{ marginBottom: 20 }}
        value={senha}
        onChangeText={handleSenhaChange}
        secureTextEntry={true}
      />
      <Button style={{ width: "100%" }} onPress={signIn}>
        Continuar
      </Button>
      <Link style={{ marginTop: 10, color: "#909090" }} onPress={goToChoise}>
        Ainda não tem uma conta?{" "}
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>Criar</Text>
      </Link>
    </Container>
  );
};

export default Login;
