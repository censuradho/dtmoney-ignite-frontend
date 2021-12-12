# dtmoney-ignite-frontend

![image](https://user-images.githubusercontent.com/49209628/145696737-a300e1be-f6bd-438a-8459-17fe2480de3d.png)

Se trata de uma aplicação que CRIA/LISTA/DELETA transações, sejam elas de entrada ou saida e exibe um sumário dos dados, com entradas, saídas e total. Aplicação desenvolvida no Ignite da [Rocketseat](https://www.rocketseat.com.br/).

Tomei a liberdade de adicionar um [Backend](https://github.com/censuradho/DevFinance-backend) que vai salvar os dados das transactions em um banco de dados. Também foi adicionado um sitema de login/cadastro que vai listar apenas as transactions relacionadas ao usuário em questão.

## Sobre o sign in / sign up

Essa aplicação conta com o sistema de refrash token, onde o token é armazenado em um cookie que é acessivel apenas do lado do servidor, trazendo mais segurança para o sistema. Logo o token de acesso é salvo apenas no estado global usando [Redux](https://redux.js.org/), assim que a aplicação restarta por algum motivo, seja refrash da página etc, é feita uma nova request utilizando do refrash roken pra trazer os dados necessários para o Front.

Um interceptor no service [backend](https://github.com/censuradho/dtmoney-ignite-frontend/blob/master/src/services/backend.ts) tem a responsabilidade de fazer essa request dos dados com o refrash token caso o Backend retorne 401 por algum motivo, e caso ocorra algum problema com o refrash token, redirecione para a tela de login. Também é responsável por receber as menssagens de erro da API e exibir a messagem adequada para o usuário.

## Backend

Link para o [Backend](https://github.com/censuradho/DevFinance-backend) dessa apliação

