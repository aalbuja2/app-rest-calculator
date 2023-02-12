<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripción de la Aplicación

La aplicación desarrollada esta bassada en NestJs + Postgres, que consiste en un servicio web que nos permite realizar las cuatro operaciones matemáticas (suma, resta, multiplicación, división) y almacenar la información de las operaciones procesadas con la Web API. Adición se ha desarrollado el proceso de despligue en base a contenedores en Kubernates (Ks8).

Esta aplicación expone básicamente cuatro enpoints para cada operación, mientras cada uno devulve un JSON con los números de entrada, el resultado, tipo de operación y fecha procesamiento.

## Despliegue de la Aplicación

Es este caso esta aplicación es en base a contenedores para el objetivo en particular se ha utilizado dos imágenes node:16.17.1 y otra de postgres:alpine, por lo cual para su construcción se ha utilizado docker y docker-compose. 

Para la creación de las imagenes se ha creado un archivo de Dockerfile donde se describe las instrucciones necesarias para la imagen.

Adicional como heramienta para gestionar la aplicación  de Kubernates se ha hecho uso de HELM, dentro de la sección de infraestrurua se han creado dos chart para nada imagen necesaria. Las iamgenes por su lado desde los chart se descargan desde el repositorio de Docker HUB en donde se han publicado las imagenes de la aplicacción.

## Prerequistos

- Docker
- Docker compose
- Node 16.17.1
- Npm 8.15.0
- Kubectl
- Minikube

## Arquitectura Propuesta

![Arquitectura](/images/Arquitectura.png)

Se utilizó Postgres como motor de base de datos en donde se almacena cada operaciòn procesada.

| Campo      | Tipo      | Obligatorio |            |
|------------|-----------|-------------|------------|
| id         | int       | x           | PrimaryKey |
| number1    | int       | x           |            |
| number2    | int       | x           |            |
| result     | int       | x           |            |
| operation  | varchar   | x           |            |
| created_at | timestamp | x           |            |

![Tabla](/images/Table.png)

La estructura de los paquetes de los archivo fuente de la aplicacion son los siguientes:

```
app
|__images
|__infraestructure
|___helm 
|__src
|___config
|___dto
|___migrations
|___operations
|__test
|___e2e
|___unit
```

## Instalación

```bash
$ npm install
```

## Construcción y despliegue de contenedores

```bash
$ docker-compose build
$ docker-compose up
```

## Ejecución de migraciones

```bash
$ npn run typeorm:run-migrations
```

## Swagger App

La documentaciòn en swagger nos permite visualizar los endpoint expuestos de la aplicación.

En este caso son cinco endpoints los cuatro primeros se refieren a las operaciones matemáticas, y por otro lado el siguiente es para visualizar las métricas de monitoreo.

![Documentacion](/images/swagger.png)

En este caso se ha utilizado como herramienta de monitoreo Prometheus que nos dará metricas de:

- Total user CPU time spent in seconds.
- Resident memory size in bytes.
- Number of open file descriptors.
- Lag of event loop in seconds.
- Start time of the process since unix epoch in seconds.
- Entre otras el response completo de las métricas se puede ver en el siguiente link  [Metricas](https://3f26044d-d591-4f84-9c15-833aadcfb1dd.mock.pstmn.io/metrics)

## Ejecución de pruebas unitarias

```bash
$ npm run test

```

## Ejecución de Pruebas e2e

```bash
$ npm run test:e2e

```

## Ejecución pruebas de cobertura

```bash
$ npm run test:cov

```
![Coberuta Test](/images/Cobertura.png)


## Etiqueta y publicación de imagenes en Docker Hub 

```bash

$ docker tag node:16.17.1 aalbuja/node:latest
$ docker push aalbuja/node:latest

$ docker tag postgres:alpine aalbuja/postgres:latest
$ docker push aalbuja/postgres:latest

```
![Docker](/images/imagenes_docker.png)

## Despliegue de la App en Kubernetes Minikube

```bash

#Despliegue de la applicación en el cluster de kubernetes
$ helm install -f node/values.yaml node-chart ./infraestructure/node
$ helm install postgres-chart infraestructure/postgres/ --values /infraestructure/postgres/values.yaml

```
![Minikube Dashboard](/images/kubernetes.png)
