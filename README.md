# README - Blogs_API
![image](https://github.com/henriqueAvner/blogs_api/assets/133919307/cce52096-d19e-48f3-9711-05ba40b2ecb4)


## Sobre o projeto:
  <summary><strong>O que foi desenvolvido:</strong></summary>

  Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdos para um blog! 

  As tecnologias utilizadas foram: `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Foram desenvolvidos endpoints que estam conectados ao banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessária a relação entre usuário e login, portanto foi trabalhada a **relação (1:N) entre** `user` e `post`; 

  3. Foi necessária a utilização de categorias para os posts, trabalhando, assim, a **relação (N:N) de** `posts` para `categories` e de `categories` para `posts`.

  4. Arquivos dentro da pasta src que foram desenvolvidos: 
     - A pasta controllers;
     - A pasta de middlewares;
     - A pasta de migrations;
     - A pasta de services;
     - A pasta models;
     - A pasta utils;
     - As rotas da API dentro do arquivo app.js

### :heavy_exclamation_mark:ATENÇÃO!:heavy_exclamation_mark:: Todos os arquivos que não foram mencionados, foram criados pela Trybe! :white_check_mark:

<br />

## Orientações:


  <summary><strong>🐋 Rodando no Docker vs Localmente:</strong></summary>
  
  ##  Com Docker
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior.**


  > :pushpin: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`). Caso queira analisar melhor, rode o comando (`sudo lsof -i :3306`), após isso, utilize o comando (`sudo service "ocupação da porta" stop`);

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :pushpin: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :pushpin: Instale as dependências com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  <br />
  
  ##  Sem Docker

  > :pushpin: Instale as dependências [**Caso existam**] com `npm install`
  
  - Lembre-se de usar o prefixo `env $(cat .env)` ao rodar os comandos localmente para carregar as variáveis de ambiente do arquivo `.env`. Por exemplo:
  
    ```bash
    env $(cat .env) npm run dev
    ```
  
  - :pushpin: Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  <br/>

  ## Instruções de utilização do projeto:
  - ⚠️ TODAS AS ROTAS ABAIXO DA ROTA (`POST /user`) NECESSITAM DE UM TOKEN GERADO PELA ROTA (`POST /login`) PARA FUNCIONAR

  | Rota                      | Funcionalidade                            | Tipo da Requisição |
|---------------------------|-------------------------------------------|--------------------|
| /login           | Realiza o login na API para gerar o token          | POST               |
| /user            | Adicionar novo usuário                             | POST               |
| /categories      | Adicionar nova categoria para os posts do blog     | POST               |
| /categories      | Obter todas as categorias                          | GET                |
| /post            | Obter todos os posts                               | GET                |
| /post/:id        | Obter post por ID                                  | GET                |
| /post            | Inserir novo post                                  | POST               |
| /post/:id        | Atualizar post por ID                              | PUT                |
| /post/:id        | Excluir post por ID                                | DELETE             |
| /user            | Obter todos os usuários                            | GET                |
| /user/:id        | Obter usuário por ID                               | GET                |

  ### Utilização:
  :pushpin: Utilize algum aplicativo ou extensão do VSCode para realizar as requisições. 
  </br>
  > Exemplo: ThunderClient, Insomnia, entre outros.
  ## Gerando seu token:
 ### Ao fazer uma requisição para a rota POST /login, com email e password, será gerado um token para você. Exemplo:


  ```json
  {
    "email": "henriqueAvner@gmail.com",
    "password": "senhaPadraoParaToken"
  }
  ```
 - Ao realizar um login correto (como o exemplo), na rota, um token será gerado:
   
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
    }
    ```
    > :warning: O token acima é fictício, você deve utilizar seu próprio token.

<br />

  ## Utilizando o token:
  Resgatando seu token, antes de fazer a requisição para qualquer rota, você deve utilizá-lo no header de sua requisição. Utilizaremos o Insomnia como exemlo:

  1- Adicionando o token - Crie sua rota:
  
  <br />
  
  ![image](https://github.com/henriqueAvner/blogs_api/assets/133919307/a19b892c-a99c-472a-85f1-b5b64f54393c)

  <br />
  
  2 - Mude para a aba Headers, e no primeiro espaço escreva **Authorization**:
  
  <br />
  
  ![image](https://github.com/henriqueAvner/blogs_api/assets/133919307/cb77168a-0e6d-40b0-8990-3b41fae7a227)
  
  <br />
  
  3 - No espaço a frente de Authorization, cole o **token** criado em seu login, porém antes, escreva o parâmetro **Bearer**:
  
  </br>
  
  ![image](https://github.com/henriqueAvner/blogs_api/assets/133919307/6997babf-c3ec-4c2d-96d9-950596dd3b6e)
  
  <br />
  
  ## :white_check_mark:Assim, você estará permitido a realizar as requisições para todos os endpoints!:white_check_mark:

  







