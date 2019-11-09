import { create, findAll, findById } from './DAL';

export default {
  Query: {
    pet: (_, { id }) => findById(id),
    pets: findAll,
  },
  Mutation: {
    pet: (_, { body }) => create(body),
  },
};
