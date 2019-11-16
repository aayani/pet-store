import { addPet, removePet, findAll, findById } from './DAL';

export default {
  Query: {
    owner: (_, { id }) => findById(id),
    owners: findAll,
  },
  Mutation: {
    addPet: (_, { ownerId, petId }) => addPet(ownerId, petId),
    removePet: (_, { ownerId, petId }) => removePet(ownerId, petId),
  },
};
