# Back-end

<table>
  <tr>
    <th>Dependência:</th>
    <th>Descrição:</th>
  </tr>
  <tr>
    <td>bcrypt</td>
    <td>Algoritmos de Senha</td>
  </tr>
  <tr>
    <td>cookie-parser</td>
    <td>Para persistir a sessão</td>
  </tr>
  <tr>
    <td>cors</td>
    <td>Resolver problema quando a Api é desenvolvida em mesmo dominio</td>
  </tr>
  <tr>
    <td>express</td>
    <td>Framework de Roteamento</td>
  </tr>
  <tr>
    <td>jsonwebtoken</td>
    <td>para gerar o token de autenticação</td>
  </tr>
  <tr>
    <td>multer</td>
    <td>Framework de Roteamento</td>
  </tr>
  <tr>
    <td>nodemon</td>
    <td>Autualização automatica so serviço</td>
  </tr>
  <tr>
    <td>dotenv</td>
    <td>Módulo de dependência zero que carrega variáveis ​​de ambiente de um .env em process.env.</td>
  </tr>
  <tr>
    <td>body-parser</td>
    <td>Middleware de análise do corpo do Node.js.</td>
  </tr>
  <tr>
    <td>mssql</td>
    <td>Cliente Microsoft SQL Server para Node.js</td>
  </tr>
  <tr>
    <td>fs-extra</td>
    <td>Adiciona métodos de sistema de arquivos que não estão incluídos no módulo nativo e adiciona suporte de promessa aos fsmétodos</td>
  </tr>
</table>

# Sequileze

```
Instalar o sequileze:
```

npm install sequelize sequelize-cli path

```
Depois disso rodar o comando:
```

npx sequelize-cli init

se desejar mudar as pastas padroes de lugar criar um arquivo na rais com o nome de: .sequelizerc

e colar o codigo a baixo nele:

```javascript
const path = require("path");

module.exports = {
  config: path.resolve("./caminho_nova_pasta/config", "config.json"),
  "models-path": path.resolve("./caminho_nova_pasta/models"),
  "seeders-path": path.resolve("./caminho_nova_pasta/seeders"),
  "migrations-path": path.resolve("./caminho_nova_pasta/migrations"),
};
```

```
Criando tabelas
```

- não precisa passar id pois ele cria sozinho

npx sequelize-cli migration:create --name=create-users  
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string

ou

Só colocar atributos naturais da tabela

npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly

```
Rodando migrations:
```

npx sequelize-cli db:migrate

```
Desfazer um migrations:
```

npx sequelize-cli db:migrate:undo

```
Gerando seeds:
```

npx sequelize-cli seed:generate --name demo-pessoa

```
Rodando arquivos seeds:
```

npx sequelize-cli db:seed:all

```
Desfazendo ultimo seed:
```

npx sequelize db:seed:undo

```
Para desfazer seeds de uma tabela específica:
```

npx sequelize-cli db:seed:undo --seed nome-do-arquivo

```
Para desfazer todos os seeds feitos:
```

npx sequelize-cli db:seed:undo:all

ler mais em https://sequelize.org/v6/index.html
https://sequelize.org/v6/manual/model-basics.html#data-types

MIGRATIONS = https://www.npmjs.com/package/sequelize-cli
https://sequelize.org/v6/manual/migrations.html#creating-the-first-model--and-migration-

retornos de status
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
