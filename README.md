# Hungry-API

Uma API para sistema de controle de alimentos em centros de distribuições

> A empresa irá disponibilizar a quantidade e em qual centro de distribuição o alimento será disponibilizado para que o
> usuário final consiga usufruir desse alimento. O centro de distribuição por sua vez, é responsável por gerenciar esses
> alimentos.

**Hungry Group**
- RM93596 - Eduarda Vieira Gomes
- RM94275 - Lívia Carvalho Keller
- RM95324 - Luisa Gabriele da Purificação

---

## Vídeos

- [Vídeo Pitch](https://www.youtube.com/watch?v=jXJIXrdogVM)
- [Vídeo Integrações (front-end, back-end e banco de dados)](https://www.youtube.com/watch?v=6-QoA9wemWw)

---

## Endpoints

- Empresas
    - [cadastrar](#cadastrar-empresas)
    - [atualizar](#atualizar-empresas)
    - [mostrar detalhes](#mostrar-detalhes-empresa)
    - [listar por e-mail](#listar-por-e-mail-empresa)
    - [apagar](#apagar-empresas)
- Centros de distribuição
    - [cadastrar](#cadastrar-centros-de-distribuição)
    - [atualizar](#atualizar-centros-de-distribuição)
    - [mostrar detalhes](#mostrar-detalhes-centro-de-distribuição)
    - [listar por e-mail](#listar-por-e-mail-centro-de-distribuição)
    - [listar todos](#listar-todos-centros-de-distribuição)
    - [apagar](#apagar-centros-de-distribuição)
    - [desativar/ ativar](#desativar-ativar-centros-de-distribuição)
- Alimentos
    - [cadastrar](#cadastrar-alimentos)
    - [atualizar](#atualizar-alimentos)
    - [mostrar detalhes](#mostrar-detalhes-alimento)
    - [apagar](#apagar-alimentos)
- Login
    - [login](#login)

---

### Cadastrar Empresas

`POST` /hungry/api/empresas

> Endpoint para a empresa se cadastrar no nosso sistema

**Campos da requisição**

| campo         | tipo   | obrigatório | descrição                                                                          |
|---------------|--------|:-----------:|------------------------------------------------------------------------------------|
| nome          | String |     sim     | o nome da empresa                                                                  |
| nome fantasia | String |     não     | o nome fantasia da empresa                                                         |
| cnpj          | long   |     sim     | o CNPJ da empresa, deve ser validado com 14 números                                |
| email         | String |     sim     | o e-mail da empresa, deve ser um e-mail válido                                     |
| senha         | String |     sim     | a senha da empresa                                                                 |
| descricao     | String |     não     | uma descrição sobre a empresa                                                      |
| cep           | int    |     sim     | o CEP de onde fica localizada a empresa, deve ser validado com 8 números           |
| país          | String |     sim     | o país onde fica localizada a empresa                                              |
| estado        | String |     sim     | o estado onde fica localizada a empresa                                            |
| cidade        | String |     sim     | a cidade onde fica localizada a empresa                                            |
| bairro        | String |     sim     | o bairro onde fica localizada a empresa                                            |
| logradouro    | String |     sim     | o logradouro onde fica localizada a empresa                                        |
| numero        | int    |     sim     | o número do logradouro onde fica localizada a empresa, deve ser um número positivo |
| complemento   | String |     não     | o complemento de onde fica localizada a empresa                                    |

**Exemplo de corpo de requisição**

```js
{
    "nome": "Bunge Alimentos S/A",
    "nome_fantasia": "Bunge",
    "cnpj": 12345678023390,
    "email": "bunge@alimentos.com",
    "senha": "Bunge123",
    "descricao": "Na Bunge, nosso propósito é conectar agricultores e consumidores para fornecer alimentos e ingredientes essenciais para o mundo.",
    "endereco": {
       "cep": 22011222,
       "pais": "Brasil",
       "estado": "SP",
       "cidade": "São Paulo",
       "bairro": "Luz",
       "logradouro": "Rua Consolação",
       "numero": 123,
       "complemento": "Prédio azul"
    }
}
```

**Códigos de Respostas**

| código | descrição                                              |
|--------|--------------------------------------------------------|
| 201    | empresa cadastrada com sucesso                         |
| 400    | campos inválidos                                       |
| 409    | conflito (caso o CNPJ já esteja cadastrado no sistema) |

---

### Atualizar Empresas

`PUT` /hungry/api/empresas

> Endpoint para a empresa atualizar o seu perfil

**Campos da requisição**

| campo         | tipo   | obrigatório | descrição                                                                          |
|---------------|--------|:-----------:|------------------------------------------------------------------------------------|
| nome          | String |     não     | o nome da empresa                                                                  |
| nome fantasia | String |     não     | o nome fantasia da empresa                                                         |
| email         | String |     não     | o e-mail da empresa, deve ser um e-mail válido                                     |
| senha         | String |     sim     | a senha da empresa                                                                 |
| descricao     | String |     não     | uma descrição sobre a empresa                                                      |
| cep           | int    |     não     | o CEP de onde fica localizada a empresa, deve ser validado com 8 números           |
| país          | String |     não     | o país onde fica localizada a empresa                                              |
| estado        | String |     não     | o estado onde fica localizada a empresa                                            |
| cidade        | String |     não     | a cidade onde fica localizada a empresa                                            |
| bairro        | String |     não     | o bairro onde fica localizada a empresa                                            |
| logradouro    | String |     não     | o logradouro onde fica localizada a empresa                                        |
| numero        | int    |     não     | o número do logradouro onde fica localizada a empresa, deve ser um número positivo |
| complemento   | String |     não     | o complemento de onde fica localizada a empresa                                    |

**Exemplo de corpo de requisição**

```js
{
    "nome": "Bunge Alimentos S/A",
    "nome_fantasia": "Bunge",
    "cnpj": 12345678023390,
    "email": "bunge@alimentos.com",
    "senha": "Bunge123",
    "descricao": "Na Bunge, nosso propósito é conectar agricultores e consumidores para fornecer alimentos e ingredientes essenciais para o mundo.",
    "endereco": {
       "cep": 22011222,
       "pais": "Brasil",
       "estado": "SP",
       "cidade": "São Paulo",
       "bairro": "Luz",
       "logradouro": "Rua Consolação",
       "numero": 123,
       "complemento": "Prédio azul"
    }
}
```

**Códigos de Respostas**

| código | descrição                      |
|--------|--------------------------------|
| 200    | empresa atualizada com sucesso |
| 400    | campos inválidos               |

---

### Mostrar Detalhes Empresa

`GET` /hungry/api/empresas/{id}

> Endpoint para a empresa visualizar o seu perfil com todos seus dados

**Exemplo de corpo de resposta**

```js
{
    "id": 4,
    "nome": "Bunge Alimentos S/A",
    "cnpj": 12345678023390,
    "email": "bunge@alimentos.com",
    "senha": "Bunge123",
    "descricao": "Na Bunge, nosso propósito é conectar agricultores e consumidores para fornecer alimentos e ingredientes essenciais para o mundo.",
    "endereco": {
        "id": 8,
        "cep": 22011222,
        "pais": "Brasil",
        "estado": "SP",
        "cidade": "São Paulo",
        "bairro": "Luz",
        "logradouro": "Rua Consolação",
        "numero": 123,
        "complemento": "Prédio azul"
    },
    "alimentos": [],
    "nome_fantasia": "Bunge"
}
```

**Códigos de Respostas**

| código | descrição                             |
|--------|---------------------------------------|
| 200    | dados da empresa retornados           |
| 404    | não existe empresa com o ID informado |

---

### Listar por E-mail Empresa

`GET` /hungry/api/empresas?email

> Endpoint para validar se há uma empresa com esse e-mail no nosso sistema

**Exemplo de corpo de resposta**

```js
{
    "id": 4,
    "nome": "Bunge Alimentos S/A",
    "cnpj": 12345678023390,
    "email": "bunge@alimentos.com",
    "senha": "Bunge123",
    "descricao": "Na Bunge, nosso propósito é conectar agricultores e consumidores para fornecer alimentos e ingredientes essenciais para o mundo.",
    "endereco": {
        "id": 8,
        "cep": 22011222,
        "pais": "Brasil",
        "estado": "SP",
        "cidade": "São Paulo",
        "bairro": "Luz",
        "logradouro": "Rua Consolação",
        "numero": 123,
        "complemento": "Prédio azul"
    },
    "alimentos": [],
    "nome_fantasia": "Bunge"
}
```

**Códigos de Respostas**

| código | descrição                                 |
|--------|-------------------------------------------|
| 200    | dados da empresa retornados               |
| 404    | não existe empresa com o e-mail informado |

---

### Apagar Empresas

`DELETE` /hungry/api/empresas/{id}

> Endpoint para a empresa apagar o seu perfil no nosso sistema

**Códigos de Respostas**

| código | descrição                             |
|--------|---------------------------------------|
| 204    | empresa apagada com sucesso           |
| 404    | não existe empresa com o ID informado |

---

### Cadastrar Centros de Distribuição

`POST` /hungry/api/centros

> Endpoint para o centro de distribuição se cadastrar no nosso sistema

**Campos da requisição**

| campo         | tipo   | obrigatório | descrição                                                               |
|---------------|--------|:-----------:|-------------------------------------------------------------------------|
| nome          | String |     sim     | o nome do centro de distribuição                                        |
| descricao     | String |     não     | uma descrição sobre o centro de distribuição                            |
| email         | String |     sim     | o e-mail do centro de distribuição, deve ser um e-mail válido           |
| funcionamento | String |     sim     | os horários e os dias de funcionamento do centro                        |
| capacidade    | String |     sim     | a quantidade de capacidade de alimentos do centro                       |
| armazenamento | String |     sim     | a quantidade do armazenamento de alimentos do centro                    |
| senha         | String |     sim     | a senha do centro de distribuição                                       |
| cep           | int    |     sim     | o CEP de onde fica localizado o centro, deve ser validado com 8 números |
| país          | String |     sim     | o país onde fica localizado o centro                                    |
| estado        | String |     sim     | o estado onde fica localizado o centro                                  |
| cidade        | String |     sim     | a cidade onde fica localizado o centro                                  |
| bairro        | String |     sim     | o bairro onde fica localizado o centro                                  |
| logradouro    | String |     sim     | o logradouro onde fica localizado o centro                              |
| numero        | int    |     sim     | o número do logradouro onde fica localizado o centro                    |
| complemento   | String |     não     | o complemento de onde fica localizado o centro                          |

**Exemplo de corpo de requisição**

```js
{
    "nome": "Santarém Alimentos LTDS",
    "descricao": "Serviço de distribuição em São Paulo",
    "email": "santarem.alimentos@gmail.com",
    "funcionamento": "Aberto das 9:00 às 20:00, não abrimos nos domingos e feriados.",
    "capacidade": "500kg",
    "armazenamento": "300kg",
    "senha": "santarem.16",
    "endereco": {
       "cep": 12394881,
       "pais": "Brasil",
       "estado": "SP",
       "cidade": "São Paulo",
       "bairro": "Centro Histórico de São Paulo",
       "logradouro": "Rua Centro",
       "numero": 6969,
       "complemento": "Perto da praça"
    }
}
```

**Códigos de Respostas**

| código | descrição                                                |
|--------|----------------------------------------------------------|
| 201    | centro de distribuição cadastrado com sucesso            |
| 400    | campos inválidos                                         |
| 409    | conflito (caso o e-mail já esteja cadastrado no sistema) |

### Atualizar Centros de Distribuição

`PUT` /hungry/api/centros

> Endpoint para o centro de distribuição atualizar o seu perfil

**Campos da requisição**

| campo         | tipo   | obrigatório | descrição                                                               |
|---------------|--------|:-----------:|-------------------------------------------------------------------------|
| nome          | String |     não     | o nome do centro de distribuição                                        |
| descricao     | String |     não     | uma descrição sobre o centro de distribuição                            |
| funcionamento | String |     não     | os horários e os dias de funcionamento do centro                        |
| capacidade    | String |     não     | a quantidade de capacidade de alimentos do centro                       |
| armazenamento | String |     não     | a quantidade do armazenamento de alimentos do centro                    |
| senha         | String |     sim     | a senha do centro de distribuição                                       |
| cep           | int    |     não     | o CEP de onde fica localizado o centro, deve ser validado com 8 números |
| país          | String |     não     | o país onde fica localizado o centro                                    |
| estado        | String |     não     | o estado onde fica localizado o centro                                  |
| cidade        | String |     não     | a cidade onde fica localizado o centro                                  |
| bairro        | String |     não     | o bairro onde fica localizado o centro                                  |
| logradouro    | String |     não     | o logradouro onde fica localizado o centro                              |
| numero        | int    |     não     | o número do logradouro onde fica localizado o centro                    |
| complemento   | String |     não     | o complemento de onde fica localizado o centro                          |

**Exemplo de corpo de requisição**

```js
{
    "nome": "Santarém Alimentos LTDS",
    "descricao": "Serviço de distribuição em São Paulo",
    "email": "santarem.alimentos@gmail.com",
    "funcionamento": "Aberto das 9:00 às 20:00, não abrimos nos domingos e feriados.",
    "capacidade": "600kg",
    "armazenamento": "500kg",
    "senha": "santarem16",
    "endereco": {
       "cep": 22394881,
       "pais": "Brasil",
       "estado": "SP",
       "cidade": "São Paulo",
       "bairro": "Centro Histórico de São Paulo",
       "logradouro": "Rua Centro",
       "numero": 6969,
       "complemento": "Perto da praça"
    }
}
```

**Códigos de Respostas**

| código | descrição                                     |
|--------|-----------------------------------------------|
| 200    | centro de distribuição atualizado com sucesso |
| 400    | campos inválidos                              |

---

### Mostrar Detalhes Centro de Distribuição

`GET` /hungry/api/centros/{id}

> Endpoint para o centro de distribuição visualizar o seu perfil com todos seus dados
>
> Todos os alimentos cadastrados nesse centro de distribuição serão mostrados

**Exemplo de corpo de resposta**

```js
{
    "id": 1,
    "nome": "Santarém Alimentos LTDS",
    "descricao": "Serviço de distribuição em São Paulo",
    "email": "armaze@hotmail.com",
    "capacidade": "600kg",
    "armazenamento": "500kg",
    "funcionamento": "Aberto das 9:00 às 20:00, não abrimos nos domingos e feriados.",
    "ativo": true,
    "senha": "santarem16",
    "endereco": {
        "id": 9,
        "cep": 22394881,
        "pais": "Brasil",
        "estado": "SP",
        "cidade": "São Paulo",
        "bairro": "Centro Histórico de São Paulo",
        "logradouro": "Rua Centro",
        "numero": 6969,
        "complemento": "Perto da praça"
    },
    "alimentos": [
        {
            "id": 1,
            "nome": "Maçã",
            "quantidade": "3kg",
            "categoria": "Frutas",
            "data_validade": "03/08/2023"
        },
        {
            "id": 6,
            "nome": "Pão Parmesão",
            "quantidade": "3kg",
            "categoria": "Pães",
            "data_validade": "13/06/2023"
        }
    ],
    "enabled": true,
    "password": "santarem16",
    "accountNonExpired": true,
    "credentialsNonExpired": true,
    "accountNonLocked": true,
    "authorities": [
        {
            "authority": "ROLE_USUARIO"
        }
    ],
    "username": "armaze@hotmail.com"
}
```

**Códigos de Respostas**

| código | descrição                                            |
|--------|------------------------------------------------------|
| 200    | dados do centro de distribuição retornados           |
| 404    | não existe centro de distribuição com o ID informado |

---

### Listar por E-mail Centro de Distribuição

`GET` /hungry/api/centros/email?email

> Endpoint para validar se há um centro de distribuição com esse e-mail no nosso sistema

**Exemplo de corpo de resposta**

```js
{
    "id": 1,
    "nome": "Santarém Alimentos LTDS",
    "descricao": "Serviço de distribuição em São Paulo",
    "email": "armaze@hotmail.com",
    "capacidade": "600kg",
    "armazenamento": "500kg",
    "funcionamento": "Aberto das 9:00 às 20:00, não abrimos nos domingos e feriados.",
    "ativo": true,
    "senha": "santarem16",
    "endereco": {
        "id": 9,
        "cep": 22394881,
        "pais": "Brasil",
        "estado": "SP",
        "cidade": "São Paulo",
        "bairro": "Centro Histórico de São Paulo",
        "logradouro": "Rua Centro",
        "numero": 6969,
        "complemento": "Perto da praça"
    },
    "alimentos": [
        {
            "id": 1,
            "nome": "Maçã",
            "quantidade": "3kg",
            "categoria": "Frutas",
            "data_validade": "03/08/2023"
        },
        {
            "id": 6,
            "nome": "Pão Parmesão",
            "quantidade": "3kg",
            "categoria": "Pães",
            "data_validade": "13/06/2023"
        }
    ],
    "enabled": true,
    "password": "santarem16",
    "accountNonExpired": true,
    "credentialsNonExpired": true,
    "accountNonLocked": true,
    "authorities": [
        {
            "authority": "ROLE_USUARIO"
        }
    ],
    "username": "armaze@hotmail.com"
}
```

**Códigos de Respostas**

| código | descrição                                                |
|--------|----------------------------------------------------------|
| 200    | dados do centro de distribuição retornados               |
| 404    | não existe centro de distribuição com o e-mail informado |

---

### Listar Todos Centros de Distribuição

`GET` /hungry/api/centros

> Endpoint para visualizar todos os centros de distribuição cadastrados no sistema
>
> Mostrará um TOP 3 com os alimentos com a maior quantidade de cada centro de distribuição

**Exemplo de corpo de resposta**

```js
{
    "content": [
        {
            "id": 3,
            "nome": "Lykke Centro de Distribuição",
            "descricao": "Centro de Distribuição de alimentos ♥ Lykke",
            "email": "lykke@gmail.com",
            "capacidade": "900kg",
            "armazenamento": "602kg",
            "funcionamento": "Aberto das 7:30 às 19:30 - todos os dias da semana",
            "ativo": true,
            "senha": "$2a$10$t8kWmnNjqamBMU4yL.YSGea36KkGCsp1Lcs3adX21wCo5BhANBbWa",
            "endereco": {
                "id": 6,
                "cep": 45594222,
                "pais": "Brasil",
                "estado": "SP",
                "cidade": "São Paulo",
                "bairro": "Jardins",
                "logradouro": "Rua França",
                "numero": 204,
                "complemento": "Prédio Lykke"
            },
            "alimentos": [
                {
                    "id": 3,
                    "nome": "Morango",
                    "quantidade": "1kg",
                    "categoria": "Frutas",
                    "data_validade": "03/07/2023"
                },
                {
                    "id": 4,
                    "nome": "Pão Francês",
                    "quantidade": "10kg",
                    "categoria": "Pães",
                    "data_validade": "10/06/2023"
                }
            ],
            "enabled": true,
            "password": "$2a$10$t8kWmnNjqamBMU4yL.YSGea36KkGCsp1Lcs3adX21wCo5BhANBbWa",
            "accountNonExpired": true,
            "credentialsNonExpired": true,
            "accountNonLocked": true,
            "authorities": [
                {
                    "authority": "ROLE_USUARIO"
                }
            ],
            "username": "lykke@gmail.com"
        },
        {
            "id": 1,
            "nome": "Santarém Alimentos LTDS",
            "descricao": "Serviço de distribuição em São Paulo",
            "email": "armaze@hotmail.com",
            "capacidade": "600kg",
            "armazenamento": "500kg",
            "funcionamento": "Aberto das 9:00 às 20:00, não abrimos nos domingos e feriados.",
            "ativo": false,
            "senha": "santarem16",
            "endereco": {
                "id": 9,
                "cep": 22394881,
                "pais": "Brasil",
                "estado": "SP",
                "cidade": "São Paulo",
                "bairro": "Centro Histórico de São Paulo",
                "logradouro": "Rua Centro",
                "numero": 6969,
                "complemento": "Perto da praça"
            },
            "alimentos": [
                {
                    "id": 1,
                    "nome": "Maçã",
                    "quantidade": "3kg",
                    "categoria": "Frutas",
                    "data_validade": "03/08/2023"
                },
                {
                    "id": 6,
                    "nome": "Pão Parmesão",
                    "quantidade": "3kg",
                    "categoria": "Pães",
                    "data_validade": "13/06/2023"
                }
            ],
            "enabled": true,
            "password": "santarem16",
            "accountNonExpired": true,
            "credentialsNonExpired": true,
            "accountNonLocked": true,
            "authorities": [
                {
                    "authority": "ROLE_USUARIO"
                }
            ],
            "username": "armaze@hotmail.com"
        }
    ],
    "pageable": {
        "sort": {
            "empty": false,
            "sorted": true,
            "unsorted": false
        },
        "offset": 0,
        "pageSize": 5,
        "pageNumber": 0,
        "unpaged": false,
        "paged": true
    },
    "last": true,
    "totalElements": 2,
    "totalPages": 1,
    "size": 5,
    "number": 0,
    "sort": {
        "empty": false,
        "sorted": true,
        "unsorted": false
    },
    "first": true,
    "numberOfElements": 4,
    "empty": false
}
```

**Códigos de Respostas**

| código | descrição                                            |
|--------|------------------------------------------------------|
| 200    | dados dos centros de distribuição retornados         |

---

### Apagar Centros de Distribuição

`DELETE` /hungry/api/centros/{id}

> Endpoint para o centro de distribuição apagar o seu perfil no nosso sistema

**Códigos de Respostas**

| código | descrição                                            |
|--------|------------------------------------------------------|
| 204    | centro de distribuição apagado com sucesso           |
| 404    | não existe centro de distribuição com o ID informado |

---

### Desativar/ ativar Centros de Distribuição

`PATCH` /hungry/api/centros/{id}

> Endpoint para o centro de distribuição atualizar o seu status como ativo ou inativo
>
> Se o status estiver como ativo, e uma requisição para esse endpoint for realizada, o status atualiza para inativo.
> Já se estiver como inativo, ele atualiza para ativo

**Códigos de Respostas**

| código | descrição                                            |
|--------|------------------------------------------------------|
| 200    | centro de distribuição atualizado como ativo/inativo |
| 404    | não existe centro de distribuição com o ID informado |

---

### Cadastrar Alimentos

`POST` /hungry/api/alimentos

> Endpoint para adicionar alimentos em um centro de distribuição

**Campos da requisição**

| campo         | tipo      | obrigatório | descrição                                                |
|---------------|-----------|:-----------:|----------------------------------------------------------|
| nome          | String    |     sim     | o nome do alimento                                       |
| quantidade    | int       |     sim     | a quantidade do alimento em kilogramas                   |
| categoria     | String    |     sim     | a categoria do alimento                                  |
| data_validade | LocalDate |     sim     | a data de validade do alimento                           |
| centro_id     | Long      |     sim     | o ID do centro de distribuição que recebeu esse alimento |
| empresa_id    | Long      |     sim     | o ID da empresa que disponibilizou esse alimento         |

**Exemplo de corpo de requisição**

```js
{
    "nome": "Banana",
    "quantidade": "100",
    "categoria": "frutas",
    "data_validade": "19/06/2023",
    "centro_distribuicao": {
      "id": 1
    },
    "empresa": {
      "id": 2
    }
}
```

**Códigos de Respostas**

| código | descrição                       |
|--------|---------------------------------|
| 201    | alimento cadastrado com sucesso |
| 400    | campos inválidos                |

---

### Atualizar Alimentos

`PUT` /hungry/api/alimentos/{id}

> Endpoint para atualizar alimentos

**Campos da requisição**

| campo         | tipo      | obrigatório | descrição                                                |
|---------------|-----------|:-----------:|----------------------------------------------------------|
| nome          | String    |     não     | o nome do alimento                                       |
| quantidade    | int       |     não     | a quantidade do alimento em kilogramas                   |
| categoria     | String    |     não     | a categoria do alimento                                  |
| data_validade | LocalDate |     sim     | a data de validade do alimento                           |
| centro_id     | Long      |     não     | o ID do centro de distribuição que recebeu esse alimento |
| empresa_id    | Long      |     não     | o ID da empresa que disponibilizou esse alimento         |

**Exemplo de corpo de requisição**

```js
{
    "nome": "Banana",
    "quantidade": "50",
    "categoria": "frutas",
    "data_validade": "15/06/2023",
    "centro_distribuicao": {
      "id": 1
    },
    "empresa": {
      "id": 2
    }
}
```

**Códigos de Respostas**

| código | descrição                              |
|--------|----------------------------------------|
| 200    | alimento atualizado com sucesso        |
| 404    | não existe alimento com o ID informado |

---

### Mostrar Detalhes Alimento

`GET` /hungry/api/alimentos/{id}

> Endpoint para visualizar os detalhes do alimento

**Exemplo de corpo de resposta**

```js
{
    "id": 6,
    "nome": "Pão Parmesão",
    "quantidade": "3kg",
    "categoria": "Pães",
    "data_validade": "13/06/2023"
}
```

**Códigos de Respostas**

| código | descrição                              |
|--------|----------------------------------------|
| 200    | dados do alimento retornados           |
| 404    | não existe alimento com o ID informado |

---

### Apagar Alimentos

`DELETE` /hungry/api/alimentos/{id}

> Endpoint para apagar alimentos

**Códigos de Respostas**

| código | descrição                              |
|--------|----------------------------------------|
| 204    | alimento apagado com sucesso           |
| 404    | não existe alimento com o ID informado |

---

### Login

`POST` /hungry/api/login

> Endpoint para o centro de distribuição e a empresa se logar no nosso sistema

**Campos da requisição**

| campo         | tipo   | obrigatório | descrição                                      |
|---------------|--------|:-----------:|------------------------------------------------|
| email         | String |     sim     | o e-mail do centro de distribuição/ da empresa |
| senha         | String |     sim     | a senha do centro de distribuição/ da empresa  |

**Exemplo de corpo de requisição**

```js
{
    "email": "santarem.alimentos@gmail.com",
    "senha": "santarem.16"
}
```

**Códigos de Respostas**

| código | descrição                                         |
|--------|---------------------------------------------------|
| 200    | centro de distribuição/empresa logado com sucesso |
| 403    | campos inválidos                                  |

---
