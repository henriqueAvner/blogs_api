# README - Blogs_API
![image](https://github.com/henriqueAvner/blogs_api/assets/133919307/cce52096-d19e-48f3-9711-05ba40b2ecb4)


## Sobre o projeto:
  <summary><strong>O que foi desenvolvido:</strong></summary>

  Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdos para um blog! 

  As tecnologias utilizadas foram: `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Foram desenvolvidos endpoints que estam conectados ao banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, portanto foi trabalhada a **relação (1:N) entre** `user` e `post`; 

  3. Foi necessária a utilização de categorias para os posts, trabalhando, assim, a **relação (N:N) de** `posts` para `categories` e de `categories` para `posts`.

  4. Arquivos dentro da pasta src que foram desenvolvidos: 
     - A pasta controllers;
     - A pasta de middlewares;
     - A pasta de migrations;
     - A pasta de services;
     - A pasta models;
     - A pasta utils;
     - As rotas da API dentro do arquivo app.js

<br />

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






