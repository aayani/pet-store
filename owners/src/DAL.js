import Logger from './Logger';
import { PETS_SERVICE_PATH } from './constants';
import { readFile, writeFile, doPost } from './utils';

const readData = async () => {
  try {
    const data = await readFile('data.json');
    return JSON.parse(data.toString());
  } catch (err) {
    Logger.error(err.message, 'DataReader');
    throw new Error(err);
  }
};

const writeData = async content => {
  try {
    await writeFile('data.json', JSON.stringify(content));
  } catch (err) {
    Logger.error(err.message, 'DataWriter');
    throw new Error(err);
  }
};

const getAllPets = () =>
  doPost(
    PETS_SERVICE_PATH,
    `{ "query": "query { pets {  id, name, type, colour, age, breed }}" }`
  ).then(({ data }) => data.pets);

export const findById = async id => {
  const [owners, pets] = await Promise.all([readData(), getAllPets()]);
  const owner = owners.find(p => p.id === id);

  if (owner) {
    return {
      ...owner,
      pets: owner.pets.map(petId => pets.find(p => p.id === petId)),
    };
  }

  throw new Error('Not found');
};

export const findAll = async () => {
  const [owners, pets] = await Promise.all([readData(), getAllPets()]);

  return owners.map(owner => ({
    ...owner,
    pets: owner.pets.map(petId => pets.find(pet => pet.id === petId)),
  }));
};

export const addPet = async (ownerId, petId) => {
  const owners = await readData();
  let updatedOwner = null;
  const updatedOwners = owners.map(owner => {
    if (owner.id === ownerId) {
      // to ensure idempotency and avoid pet ID duplication
      if (owner.pets.find(p => p === petId)) {
        updatedOwner = owner;
      } else {
        updatedOwner = {
          ...owner,
          pets: [...owner.pets, petId],
        };
      }
      return updatedOwner;
    }

    return owner;
  });

  if (updatedOwner) {
    await writeData(updatedOwners);
    return findById(updatedOwner.id);
  }

  throw new Error('Not found');
};

export const removePet = async (ownerId, petId) => {
  const owners = await readData();
  let updatedOwner = null;
  const updatedOwners = owners.map(owner => {
    if (owner.id === ownerId) {
      updatedOwner = {
        ...owner,
        pets: owner.pets.filter(p => p !== petId),
      };
      return updatedOwner;
    }
  });

  if (updatedOwner) {
    await writeData(updatedOwners);
    return findById(updatedOwner.id);
  }

  throw new Error('Not found');
};
