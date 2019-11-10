import 'regenerator-runtime/runtime';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import Logger from './src/Logger';
import typeDefs from './src/typeDefs';
import resolvers from './src/resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV === 'development',
  playground: process.env.NODE_ENV === 'development',
});
server.applyMiddleware({ app, path: '/pets/graphql' });

app.listen(3000, () =>
  Logger.info(
    `🚀  GraphQL server running on http://localhost:3000/pets/graphql in "${process.env.NODE_ENV}" mode`,
    'Server'
  )
);
