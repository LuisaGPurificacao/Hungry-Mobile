import React, { useState, useEffect } from "react";
import { Container, Header, UpdateDelIcons, EmailArea, Scroll } from "./styles";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";

import Text from "../../components/text";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "../../components/link";

const Profile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email, token, role } = route.params;
  const fullyToken = `Bearer ${token}`;
  const [empresa, setEmpresa] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const goToHome = () => {
    navigation.navigate("Home", {
      email,
      token,
      role,
      empresa,
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
        onPress: deleteCompany,
      },
    ]);
  };

  const deleteCompany = async () => {
    const id = empresa.id;
    try {
      const response = await fetch(
        `http://192.168.0.5:8080/hungry/api/empresas/${id}`,
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

  const handleEdit = async () => {
    const updatedEmpresa = {
      id: empresa.id,
      nome: empresa.nome,
      nome_fantasia: empresa.nome_fantasia,
      email: empresa.email,
      cnpj: empresa.cnpj,
      descricao: empresa.descricao,
      endereco: {
        cep: empresa.endereco.cep,
        pais: empresa.endereco.pais,
        estado: empresa.endereco.estado,
        cidade: empresa.endereco.cidade,
        bairro: empresa.endereco.bairro,
        logradouro: empresa.endereco.logradouro,
        numero: empresa.endereco.numero,
        complemento: empresa.endereco.complemento,
      },
    };

    setEmpresa(updatedEmpresa);
    console.log(updatedEmpresa);
    await updateEmpresa(updatedEmpresa);
    setIsEditing(false);
  };

  const updateEmpresa = async (updatedEmpresa) => {
    const id = updatedEmpresa.id;
    console.log(id);
    console.log(`updatedEmpresa: ${JSON.stringify(updatedEmpresa)}`);
    try {
      const response = await fetch(
        `http://192.168.0.5:8080/hungry/api/empresas/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedEmpresa),
          headers: {
            "Content-Type": "application/json",
            Authorization: fullyToken,
          },
        }
      );

      console.log(response);

      if (response.ok) {
        setLoading(false);
        return;
      } else {
        throw new Error(
          "Informações de usuário editadas com sucesso."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Informações de usuário editadas com sucesso."
      );
    }
  };

  const fetchEmpresa = async () => {
    try {
      const response = await fetch(
        `http://192.168.0.5:8080/hungry/api/empresas/email/${email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setEmpresa({
          ...data,
          cnpj: String(data.cnpj),
          endereco: {
            ...data.endereco,
            cep: String(data.endereco.cep),
            numero: String(data.endereco.numero),
          },
        });
      } else {
        throw new Error("Ocorreu um erro ao obter os dados da empresa.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Ocorreu um erro ao obter os dados da empresa. Tente novamente mais tarde."
      );
    }
  };

  useEffect(() => {
    fetchEmpresa();
  }, []);

  return (
    <Container>
      {role === "EMPRESA" && empresa && (
        <>
          <Header>
            <Link onPress={goToHome}>
              <FeatherIcon name="home" size={25} color="#9DC184" />
            </Link>

            <UpdateDelIcons>
              {!isEditing ? (
                <>
                  <Link>
                    <FeatherIcon
                      name="edit"
                      size={25}
                      color="#909090"
                      onPress={() => setIsEditing(true)}
                    />
                  </Link>
                  <Link
                    style={{ marginLeft: 15 }}
                    onPress={confirmDeleteCompany}
                  >
                    <FeatherIcon name="trash-2" size={25} color="#c67474" />
                  </Link>
                </>
              ) : (
                <>
                  <Link onPress={handleEdit}>
                    <FeatherIcon name="check" size={25} color="#9DC184" />
                  </Link>
                  <Link
                    style={{ marginLeft: 15 }}
                    onPress={() => setIsEditing(false)}
                  >
                    <FeatherIcon name="x" size={25} color="#c67474" />
                  </Link>
                </>
              )}
            </UpdateDelIcons>
          </Header>
          {isEditing ? (
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
                Insira sua informações para{" "}
                <Text style={{ color: "#9DC184", fontWeight: "bold" }}>
                  edição
                </Text>{" "}
                nos campos abaixo
              </Text>
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.nome}
                onChangeText={(text) => setEmpresa({ ...empresa, nome: text })}
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.nome_fantasia}
                onChangeText={(text) =>
                  setEmpresa({ ...empresa, nome_fantasia: text })
                }
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.email}
                onChangeText={(text) => setEmpresa({ ...empresa, email: text })}
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.cnpj}
                onChangeText={(text) => setEmpresa({ ...empresa, cnpj: text })}
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.descricao}
                onChangeText={(text) =>
                  setEmpresa({ ...empresa, descricao: text })
                }
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
                Editar informações de{" "}
                <Text style={{ color: "#9DC184", fontWeight: "bold" }}>
                  endereço
                </Text>{" "}
              </Text>
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.endereco.cep}
                onChangeText={(text) =>
                  setEmpresa({
                    ...empresa,
                    endereco: { ...empresa.endereco, cep: text },
                  })
                }
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.endereco.pais}
                onChangeText={(text) =>
                  setEmpresa({
                    ...empresa,
                    endereco: { ...empresa.endereco, pais: text },
                  })
                }
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.endereco.estado}
                onChangeText={(text) =>
                  setEmpresa({
                    ...empresa,
                    endereco: { ...empresa.endereco, estado: text },
                  })
                }
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.endereco.cidade}
                onChangeText={(text) =>
                  setEmpresa({
                    ...empresa,
                    endereco: { ...empresa.endereco, cidade: text },
                  })
                }
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.endereco.bairro}
                onChangeText={(text) =>
                  setEmpresa({
                    ...empresa,
                    endereco: { ...empresa.endereco, bairro: text },
                  })
                }
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.endereco.logradouro}
                onChangeText={(text) =>
                  setEmpresa({
                    ...empresa,
                    endereco: { ...empresa.endereco, logradouro: text },
                  })
                }
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.endereco.numero}
                onChangeText={(text) =>
                  setEmpresa({
                    ...empresa,
                    endereco: { ...empresa.endereco, numero: text },
                  })
                }
              />
              <Input
                style={{ marginBottom: 20, height: 50 }}
                value={empresa.endereco.complemento}
                onChangeText={(text) =>
                  setEmpresa({
                    ...empresa,
                    endereco: { ...empresa.endereco, complemento: text },
                  })
                }
              />
            </Scroll>
          ) : (
            <>
              <Text
                style={{
                  marginTop: 30,
                  fontSize: 20,
                  color: "#9DC184",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {empresa.nome_fantasia}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  fontWeight: "400",
                  color: "#909090",
                }}
              >
                {empresa.descricao}
              </Text>
              <EmailArea style={{ marginTop: 30 }}>
                <FeatherIcon name="mail" size={24} color="#9DC184" />
                <Text
                  style={{
                    fontWeight: "400",
                    color: "#909090",
                    marginLeft: 10,
                    fontSize: 16,
                  }}
                >
                  {empresa.email}
                </Text>
              </EmailArea>
              <Text
                style={{
                  marginTop: 30,
                  fontSize: 20,
                  color: "#9DC184",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                Endereço
              </Text>
              <Text
                style={{ marginTop: 10, fontWeight: "400", color: "#909090" }}
              >
                CEP: {empresa.endereco.cep}
              </Text>
              <Text
                style={{ marginTop: 10, fontWeight: "400", color: "#909090" }}
              >
                {empresa.endereco.cidade} - {empresa.endereco.estado}
              </Text>
              <Text
                style={{ marginTop: 10, fontWeight: "400", color: "#909090" }}
              >
                {empresa.endereco.logradouro}, {empresa.endereco.numero} -{" "}
                {empresa.endereco.bairro}
              </Text>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Profile;
