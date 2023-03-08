
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

# Projeto DeliveryApp

## Descrição

Projeto em grupo feito durante o curso da Trybe.
É uma aplicação de um app de delivery em que um usuário pode comprar e acompanhar o andamento da entrega do seu pedido, e o vendedor consegue ver os pedidos feitos pelo cliente e atualizar os status.
O projeto foi feito com base na arquitetura Model-Service-Controller (MSC). 


## Tecnologias Usadas

Front-end:
> Desenvolvido usando: ReactJS, CSS, RTL, JSX

Back-end:
> Desenvolvido usando: NodeJS, Express, Sequelize, Docker, MySQL, JWT, Joi, Mocha, Sinnon, Chai


## Credenciais

Cliente:

Email: zebirita@email.com Senha: $#zebirita#$

Vendedor:

Email: fulana@deliveryapp.com Senha: fulana@123

Admin:

Email: adm@deliveryapp.com Senha: --adm2@21!!--

## Como rodar localmente

Necessário Docker e Docker-Compose

* Clone o repositório

```bash
$ git clone git@github.com:gislane-natalia-souza-miranda/project-delivery-app.git
```

* Entre na pasta raíz do projeto

```bash
$ cd project-delivery-app
```

* Instale as dependências

```bash
$ npm run deps
```

* Renomeie o arquivo .env.example para .env (caso já possua um banco mysql local personalize as variáveis e ignore o passo 5)

```bash
$ mv back-end/.env.example back-end/.env
```


* Suba um container com o banco de dados Mysql

```bash
$ docker run --name my-mysql -e MYSQL_ROOT_PASSWORD=senhaDoDB -d -p 127.0.0.1:3306:3306 mysql
```

* Inicie a aplicação

```bash
$ npm run dev:prestart && npm run dev
```
