# Pet Store

A sample micro-services project built using [Node.js](https://nodejs.org) and [Docker](https://docker.com) with GraphQL API for managing a pet store

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before running the project on your system, make sure you have the following software installed.

- [yarn](https://yarnpkg.com) - fast and reliable dependency management
- [docker](https://docker.com) - OS level virtualization to deliver packages called containers
- [docker-compose](https://docs.docker.com/compose) - tool for defining and running multi-container Docker applications

### Installing

To initialize the project, first navigate to the root directory and initialize the pets service

```
cd pets
yarn
yarn build
```

And to initialize the owners service

```
cd owners
yarn
yarn build
```

To run automated tests

```
yarn test
```

The services can be run in development mode

```
yarn start:dev
```

### Caveat

Since owners service is dependent on pets service, make sure pets service is up anytime you are working with owners service _(testing, development etc.)_

```
cd pets
yarn start:prod
```

## Deployment

To get the project up and running in a production ready environment run the following command

```
docker-compose up --build
```

If everything goes well, the project can be viewed at [http://localhost:8080](http://localhost:8080)

## Technologies

- [Apollo Server](https://www.apollographql.com/docs/apollo-server) - Server for GraphQL
- [Babel](https://babeljs.io) - Compile JavaScript to a primitive version
- [Docker](https://docker.com) - OS level virtualization
- [Express](https://expressjs.com) - Web application framework for Node.js
- [Nginx](https://nginx.com) - Web server used for service discovery

## Support

Automated test suites are provided along with the services. The web client of the project is tested using Chrome & Firefox.

## Authors

- **Wahaj Aayani** - _Initial work_ - [aayani](https://github.com/aayani)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
