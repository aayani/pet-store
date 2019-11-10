import { create, update, findAll, findById } from './DAL';

export default {
  Query: {
    pet: (_, { id }) => findById(id),
    pets: findAll,
  },
  Mutation: {
    create: (_, { body }) => create(body),
    update: (_, { id, body }) => update(id, body),
  },
};
