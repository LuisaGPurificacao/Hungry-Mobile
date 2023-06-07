import { React, useState } from "react";
import { Container } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import Text from "../../../components/text";
import Input from "../../../components/input";
import Button from "../../../components/button";

const PasswordCompany = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = async () => {
    if (!senha || !confirmarSenha) {
      alert("Preencha todos os campos");
      return;
    }

    if (senha != confirmarSenha) {
      alert("As senhas não são iguais");
      return;
    }

    const { nome, nome_fantasia, cnpj, email, descricao, endereco } = route.params;

    try {
      const response = await fetch(`http://192.168.0.5:8080/hungry/api/empresas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          nome_fantasia,
          cnpj,
          email,
          descricao,
          endereco,
          senha
        }),
      });

      if (response.ok) {
        alert("Usuário criado com sucesso");

        navigation.navigate("Login", {
          nome,
          nome_fantasia,
          cnpj,
          email,
          descricao,
          endereco,
        });
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
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
        Crie uma{" "}
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>nova senha</Text>
      </Text>
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        style={{ marginBottom: 20 }}
        value={senha}
        onChangeText={setSenha}
      />
      <Input
        placeholder="Confirme sua senha"
        secureTextEntry={true}
        style={{ marginBottom: 20 }}
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      <Button style={{ width: "100%" }} onPress={handleSubmit}>
        Continuar
      </Button>
    </Container>
  );
};

export default PasswordCompany;
