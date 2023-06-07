import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  UpdateDelIcons,
  EmailArea,
  Border,
  FooContainer,
  FoodInfosContainer,
} from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Alert } from "react-native";

import Text from "../../../../components/text";
import Input from "../../../../components/input";
import Button from "../../../../components/button";
import Link from "../../../../components/link";

const CentroInfos = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [centro, setCentro] = useState(null);
  const { email, token, role } = route.params;

  const goToRegisterFood = () => {
    const centroId = centro.id;
    console.log(centroId);
    navigation.navigate("RegisterFood", {
      email,
      token,
      role,
      centroId,
    });
  };

  const confirmDeleteCompany = () => {
    Alert.alert("Confirmação", "Tem certeza que deseja deletar a empresa?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Deletar",
        style: "destructive",
        onPress: deleteCentro,
      },
    ]);
  };

  const deleteCentro = async () => {
    try {
      const centroId = centro.id;
      const response = await fetch(
        `http://192.168.0.5:8080/hungry/api/centros/${centroId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        console.log(response);
        navigation.navigate("Choise");
        alert("Usuário deletado com sucesso.");
        return;
      } else {
        throw new Error("Ocorreu um erro ao deletar o usuário.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocorreu um erro ao deletar o usuário.");
    }
  };

  const goToEdit = () => {
    navigation.navigate("Edit", {
      email,
      token,
      role,
    });
  };

  const fetchCentro = async () => {
    try {
      console.log(email);
      const response = await fetch(
        `http://192.168.0.5:8080/hungry/api/centros/email/${email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCentro({
          ...data,
          endereco: {
            ...data.endereco,
            cep: String(data.endereco.cep),
            numero: String(data.endereco.numero),
          },
        });
        console.log(data);
      } else {
        throw new Error("Ocorreu um erro ao obter os dados do centro.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Ocorreu um erro ao obter os dados do centro. Tente novamente mais tarde."
      );
    }
  };

  useEffect(() => {
    fetchCentro();
  }, []);

  return (
    <Container>
      {centro ? (
        <React.Fragment>
          <Header>
            <Link>
              <FeatherIcon
                name="edit"
                size={25}
                color="#9DC184"
                onPress={goToEdit}
              />
            </Link>
            <Link>
              <FeatherIcon
                name="trash-2"
                size={25}
                color="#c07171"
                onPress={confirmDeleteCompany}
              />
            </Link>
          </Header>
          <Text
            style={{
              color: "#000",
              width: "100%",
              fontSize: 20,
              marginTop: 50,
              marginBottom: 20,
              fontWeight: "bold",
            }}
          >
            {centro.nome}
          </Text>
          <Text
            style={{
              color: "#909090",
              width: "100%",
              fontSize: 16,
              marginBottom: 30,
            }}
          >
            {centro.descricao}
          </Text>
          <Border />
          <Text
            style={{
              fontWeight: "600",
              color: "#9DC184",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Alimentos cadastrados
          </Text>
          <FooContainer>
            {centro.alimentos.map((alimento) => (
              <FoodInfosContainer key={alimento.id}>
                <Text
                  style={{ fontSize: 16, color: "#9DC184", fontWeight: "500" }}
                >
                  {alimento.nome}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    marginTop: 5,
                    fontWeight: "500",
                    color: "#909090",
                  }}
                >
                  <FeatherIcon name="box" size={14} color="#9DC184" />{" "}
                  {alimento.quantidade}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    marginTop: 5,
                    fontWeight: "500",
                    color: "#909090",
                  }}
                >
                  <FeatherIcon name="calendar" size={14} color="#9DC184" />{" "}
                  {alimento.data_validade}
                </Text>
              </FoodInfosContainer>
            ))}
          </FooContainer>

          <Button
            style={{
              width: "100%",
              position: "absolute",
              bottom: 50,
              marginLeft: 20,
            }}
            onPress={goToRegisterFood}
          >
            Registrar alimentos
          </Button>
        </React.Fragment>
      ) : (
        <Text>Carregando dados...</Text>
      )}
    </Container>
  );
};

export default CentroInfos;
