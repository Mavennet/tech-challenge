## Intro

Project was built on top the NestJS framework.
Default port is 3000, so after run navigate to http://localhost:3000

There are several CRUD endpoints in the REST like style:

1) GET /users
   GET /users/1
  ...etc

2) POST /auth/login
   for auth purposes.
    I set the default password in order to simplicity for all users: Qwerty001

   request example:

   POST /auth/login HTTP/1.1
  Host: localhost:3000
  Content-Type: application/x-www-form-urlencoded
  User-Agent: PostmanRuntime/7.19.0
  Accept: */*
  Cache-Control: no-cache
  Postman-Token: fe9ada97-18d7-431e-b74a-11d652fd729f,9a3ce880-ac40-4632-bf0b-c03268280707
  Host: localhost:3000
  Accept-Encoding: gzip, deflate
  Content-Length: 32
  Connection: keep-alive
  cache-control: no-cache

  userName=Bret&password=Qwerty001

3) GET /albums
  you should pass jwt auth token within request

4) GET /photos
you should pass jwt auth token within request

Nest is an MIT-licensed open source project. 

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Stay in touch

- Author - [Denis Chudinov](https://www.linkedin.com/in/denis-chudinov-28784b161/)
