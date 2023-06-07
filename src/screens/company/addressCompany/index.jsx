import { React, useState, useEffect } from "react";
import { Container, InputArea } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

import Text from "../../../components/text";
import Input from "../../../components/input";
import Button from "../../../components/button";

const AddressCompany = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        if (cep.length === 8) {
          const response = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`
          );
          const data = response.data;
          setLogradouro(data.logradouro);
          setPais("Brasil");
          setEstado(data.uf);
          setCidade(data.localidade);
          setBairro(data.bairro);
        } else {
          setLogradouro("");
          setPais("");
          setEstado("");
          setBairro("");
        }
      } catch (error) {
        console.error("Erro ao consultar CEP:", error);
      }
    };

    fetchAddress();
  }, [cep]);

  const handleSubmit = () => {
    if (
      !cep ||
      !numero ||
      !logradouro ||
      !pais ||
      !estado ||
      !bairro ||
      !complemento
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const { nome, nome_fantasia, cnpj, email, descricao } = route.params;

    const endereco = {
      cep,
      logradouro,
      pais,
      numero,
      estado,
      cidade,
      bairro,
      complemento,
    };

    navigation.navigate("PasswordCompany", {
      nome,
      nome_fantasia,
      cnpj,
      email,
      descricao,
      endereco,
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
        Qual é o endereço da sua{" "}
        <Text style={{ color: "#9DC184", fontWeight: "bold" }}>empresa?</Text>{" "}
      </Text>
      <Input
        placeholder="CEP"
        style={{ marginBottom: 20 }}
        value={cep}
        onChangeText={setCep}
      />
      <InputArea>
        <Input
          placeholder="Logradouro"
          style={{ marginBottom: 20, width: "68%" }}
          value={logradouro}
          onChangeText={setLogradouro}
        />
        <Input
          placeholder="Número"
          style={{ marginBottom: 20, width: "30%" }}
          value={numero}
          onChangeText={setNumero}
        />
      </InputArea>

      <InputArea>
        <Input
          placeholder="País"
          style={{ marginBottom: 20, width: "32%" }}
          value={pais}
          onChangeText={setPais}
        />
        <Input
          placeholder="Estado - UF"
          style={{ marginBottom: 20, width: "32%" }}
          value={estado}
          onChangeText={setEstado}
        />
        <Input
          placeholder="Cidade"
          style={{ marginBottom: 20, width: "32%" }}
          value={cidade}
          onChangeText={setCidade}
        />
      </InputArea>

      <Input
        placeholder="Bairro"
        style={{ marginBottom: 20 }}
        value={bairro}
        onChangeText={setBairro}
      />
      <Input
        placeholder="Complemento"
        style={{ marginBottom: 20 }}
        value={complemento}
        onChangeText={setComplemento}
      />
      <Button style={{ width: "100%" }} onPress={handleSubmit}>
        Continuar
      </Button>
    </Container>
  );
};

export default AddressCompany;
