import { addPet, removePet, findAll, findById, getOwnerPets } from './DAL';

export default {
  Query: {
    owner: (_, { id }) => findById(id),
    owners: findAll,
    pets: (_, { id }) => getOwnerPets(id),
  },
  Mutation: {
    addPet: (_, { ownerId, petId }) => addPet(ownerId, petId),
    removePet: (_, { ownerId, petId }) => removePet(ownerId, petId),
  },
};
