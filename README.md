# Boas vindas ao repositório do TFC - Trybe Futebol Clube! ⚽️


## Habilidades

![Exemplo app front](./front-example.png)

O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

No desenvolvimento do `TFC`, fiquei responsável por desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que funcionem consumindo um banco de dados.

Nesse projeto, foi construido **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. Seu desenvolvimento foi **respeitar regras de negócio** providas no projeto e **a API foi capaz de ser consumida por um front-end já provido nesse projeto**.
Nesse projeto, fui capaz de:

 - Realizar a dockerização dos apps, network, volume e compose;
 - Modelar dados com **MySQL** através do **Sequelize**;
 - Criar e associar tabelas usando `models` do `sequelize`;
 - Construir uma **API REST** com endpoints para consumir os models criados;
 - Fazer um `CRUD` utilizando `ORM`;

---

## Desenvolvimento

Foi desenvolvido uma aplicação dockerizada em `Node.js + Typescript` usando o pacote `sequelize`.

* ⚠️ **Para adicionar pacotes adicionais ao backend, utilize o arquivo `app/backend/packages.npm`, separando os pacotes adicionais por espaços ou quebras de linha.**

---

#### Variáveis de ambiente

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`Trybe-Futebol-Club/app/backend/src/database/config/database.ts`

```
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: TRYBE_FUTEBOL_CLUBE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
};

```

**(Neste arquivo o nome do database pode ser `"database": 'TRYBE_FUTEBOL_CLUBE'`)**

```
### Como usar

- Você pode instalar as dependências do front-end com o comando **npm install ou yarn**
- Você pode instalar as dependências do back-end com o comando **npm install ou yarn**
- Você pode rodar o docker-compose com o comando **compose:up** para iniciar o docker
- Você pode rodar o docker-compose com o comando **compose:down** para parar os containers
- Você pode startar a aplicação front-end com o comando **npm start ou yarn start**
- Você pode startar a aplicação back-end com o comando **npm start ou yarn start**

```
