import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import Logger from './Logger';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === 'development',
  introspection: process.env.NODE_ENV === 'development',
});
server.applyMiddleware({ app, path: '/graphql' });

app.listen(3000, () =>
  Logger.info(
    `🚀  GraphQL server (Pets Service) running on http://localhost:3000/graphql in "${process.env.NODE_ENV}" mode`,
    'Server'
  )
);
