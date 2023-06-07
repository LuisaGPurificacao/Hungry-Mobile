import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  UpdateDelIcons,
  EmailArea,
  Scroll,
  InputArea,
} from "./styles";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TextInputMask } from "react-native-masked-text";

import Text from "../../../components/text";
import Input from "../../../components/input";
import Button from "../../../components/button";
import Link from "../../../components/link";

const Edit = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { email, token, role, id } = route.params;

  const goToCentroInfos = () => {
    navigation.navigate("CentroInfos", {
      email,
      token,
      role,
    });
  };

  return (
    <Container>
      <Header>
        <UpdateDelIcons>
          <Link>
            <FeatherIcon
              name="arrow-left"
              size={25}
              color="#9DC184"
              onPress={goToCentroInfos}
            />
          </Link>
        </UpdateDelIcons>
      </Header>
      <Scroll>
        <Text
          style={{
            color: "#909090",
            width: "70%",
            fontSize: 24,
            marginTop: 50,
            marginBottom: 30,
          }}
        >
          Atualize as informações do{" "}
          <Text style={{ color: "#9DC184", fontWeight: "bold" }}>centro</Text>{" "}
          nos campos abaixo
        </Text>
        <Input
          placeholder="Nome do centro de distribuição"
          style={{ marginBottom: 20 }}
          // value={nome}
          // onChangeText={setNome}
        />
        <Input
          placeholder="E-mail"
          style={{ marginBottom: 20 }}
          // value={quantidade}
          // onChangeText={setQuantidade}
        />
        <Input
          placeholder="Capacidade de armazenamento"
          style={{ marginBottom: 20 }}
          // value={categoria}
          // onChangeText={setCategoria}
          keyboardType="numeric"
        />
        <Input
          placeholder="Descrição"
          style={{ marginBottom: 20 }}
          // value={categoria}
          // onChangeText={setCategoria}
        />
        <Text
          style={{
            color: "#909090",
            width: "70%",
            fontSize: 24,
            marginTop: 50,
            marginBottom: 30,
          }}
        >
          Atualize as informações do{" "}
          <Text style={{ color: "#9DC184", fontWeight: "bold" }}>endereço</Text>{" "}
          nos campos abaixo
        </Text>
        <Input
          placeholder="CEP"
          style={{ marginBottom: 20 }}
          // value={cep}
          // onChangeText={setCep}
        />
        <InputArea>
          <Input
            placeholder="Logradouro"
            style={{ marginBottom: 20, width: "68%" }}
            // value={logradouro}
            // onChangeText={setLogradouro}
          />
          <Input
            placeholder="Número"
            style={{ marginBottom: 20, width: "30%" }}
            // value={numero}
            // onChangeText={setNumero}
          />
        </InputArea>

        <InputArea>
          <Input
            placeholder="País"
            style={{ marginBottom: 20, width: "32%" }}
            // value={pais}
            // onChangeText={setPais}
          />
          <Input
            placeholder="Estado - UF"
            style={{ marginBottom: 20, width: "32%" }}
            // value={estado}
            // onChangeText={setEstado}
          />
          <Input
            placeholder="Cidade"
            style={{ marginBottom: 20, width: "32%" }}
            // value={cidade}
            // onChangeText={setCidade}
          />
        </InputArea>

        <Input
          placeholder="Bairro"
          style={{ marginBottom: 20 }}
          // value={bairro}
          // onChangeText={setBairro}
        />
        <Input
          placeholder="Complemento"
          style={{ marginBottom: 20 }}
          // value={complemento}
          // onChangeText={setComplemento}
        />
        <Button style={{ width: "100%" }}>Salvar</Button>
      </Scroll>
    </Container>
  );
};

export default Edit;
