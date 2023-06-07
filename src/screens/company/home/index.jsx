import { React, useState, useEffect } from "react";
import {
  Container,
  Header,
  SearchContainer,
  ScrollContainer,
  CentroContainer,
  CategoryContainer,
  NameOperation,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";

import Text from "../../../components/text";
import Link from "../../../components/link";
import Input from "../../../components/input";
import Button from "../../../components/button";

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [centros, setCentros] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const { email, token, role, empresa } = route.params;

  const goToInfoCentro = (centro) => {
    navigation.navigate("InfosCentro", {
      centros,
      centro,
      email,
      token,
      role,
      empresa,
    });
  };

  const goToProfile = () => {
    navigation.navigate("Profile", {
      email,
      token,
      role,
    });
  };

  useEffect(() => {
    const fetchCentro = async () => {
      try {
        const response = await fetch(
          `http://192.168.0.5:8080/hungry/api/centros`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("data:", data);
          setCentros(data.content);
          setIsloading(false);
        } else {
          throw new Error(
            "Ocorreu um erro ao resgatar todos os centros. Tente novamente mais tarde."
          );
        }
      } catch (error) {
        console.error("Error:", error);
        alert(
          "Ocorreu um erro ao resgatar todos os centros. Tente novamente mais tarde."
        );
      }
    };

    if (isLoading) {
      fetchCentro();
    }
  }, [isLoading]);

  return (
    <ScrollContainer>
      <Container>
        {isLoading ? (
          <>
            <Text>Carregando...</Text>
          </>
        ) : (
          <>
            <Header>
              <Link onPress={goToProfile}>
                <FeatherIcon name="user" size={30} color="#9DC184" />
              </Link>
              <Text style={{ fontSize: 16 }}>
                Olá,{" "}
                <Text
                  style={{
                    textTransform: "capitalize",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#9DC184",
                  }}
                >
                  {empresa.nome_fantasia}
                </Text>
              </Text>
            </Header>
            <SearchContainer>
              <Input
                style={{
                  width: "80%",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                placeholder="Buscar por centros de distribuição"
              />
              <Button
                style={{
                  borderWidth: 1,
                  borderColor: "#cdcdcd",
                  width: "20%",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  backgroundColor: "#f3f3f3",
                }}
              >
                <FeatherIcon name="search" size={24} color="#909090" />
              </Button>
            </SearchContainer>
            <Text
              style={{
                marginTop: 40,
                marginBottom: 20,
                fontSize: 18,
                fontWeight: "400",
              }}
            >
              Centros de distribuição disponíveis
            </Text>

            {centros && centros.length > 0 ? (
              centros.map((centro) => (
                <CentroContainer
                  key={centro.id}
                  onPress={() => goToInfoCentro(centro)}
                >
                  <NameOperation>
                    <Text
                      style={{
                        marginBottom: 10,
                        fontSize: 14,
                        fontWeight: "600",
                      }}
                    >
                      {centro.nome}
                    </Text>
                    <Text
                      style={{
                        marginBottom: 10,
                        fontSize: 14,
                        fontWeight: "600",
                        color: centro.ativo ? "#9DC184" : "red",
                      }}
                    >
                      {centro.ativo ? "Aberto" : "Fechado"}
                    </Text>
                  </NameOperation>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#909090",
                    }}
                  >
                    {centro.descricao}
                  </Text>
                  <Text
                    style={{
                      marginTop: 15,
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#000",
                    }}
                  >
                    Em estoque
                  </Text>
                  <CategoryContainer>
                    {centro.alimentos.map((alimento) => (
                      <Text
                        key={alimento.id}
                        style={{
                          fontSize: 12,
                          fontWeight: "400",
                          color: "#909090",
                          marginTop: 10,
                          marginRight: 10,
                          backgroundColor: "#9DC184",
                          padding: 5,
                          borderRadius: 100,
                          color: "#fff",
                          fontWeight: "600",
                        }}
                      >
                        {alimento.categoria}
                      </Text>
                    ))}
                  </CategoryContainer>
                </CentroContainer>
              ))
            ) : (
              <Text style={{ textAlign: "center", marginTop: 180 }}>
                Nenhum centro de distribuição disponível.
              </Text>
            )}
          </>
        )}
      </Container>
    </ScrollContainer>
  );
};

export default Home;
