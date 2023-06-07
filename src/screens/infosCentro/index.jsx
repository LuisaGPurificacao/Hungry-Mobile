import React, {useState} from "react";
import { Container, Header, FoodInfosContainer, FooContainer } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";

import Link from "../../components/link";
import Text from "../../components/text";

const InfosCentro = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email, token, role, empresa, centro, centros } = route.params;
  const [userData, setUserData] = useState({});

  const goToHome = () => {
    navigation.navigate("Home", {
      email,
      token,
      role,
      empresa,
      centros,
      centro,
    });
  };

  return (
    <Container>
      <Header style={{ marginBottom: 30 }}>
        <Link onPress={goToHome}>
          <FeatherIcon name="home" size={25} color="#9DC184" />
        </Link>
      </Header>
      <Text style={{ fontSize: 20, fontWeight: "500" }}>{centro.nome}</Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          marginTop: 20,
          color: "#909090",
        }}
      >
        {centro.descricao}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          marginTop: 30,
          marginBottom: 10,
          color: "#000",
          textAlign: "center",
        }}
      >
        Alimentos disponíveis
      </Text>
      <FooContainer>
        {centro.alimentos.map((alimento) => (
          <FoodInfosContainer key={alimento.id}>
            <Text style={{ fontSize: 16, color: "#9DC184", fontWeight: "500" }}>
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
    </Container>
  );
};

export default InfosCentro;
