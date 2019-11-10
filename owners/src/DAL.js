import Logger from './Logger';
import { readFile, writeFile } from './utils';

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

export const findById = async id => {
  const owners = await readData();
  return owners.find(p => p.id === id);
};

export const findAll = readData;

export const addPet = async (ownerId, petId) => {
  const owners = await readData();
  let updatedOwner = null;
  const updatedOwners = owners.map(owner => {
    if (owner.id === ownerId) {
      updatedOwner = {
        ...owner,
        pets: [...owner.pets, petId],
      };
      return updatedOwner;
    }

    return owner;
  });

  if (updatedOwner) {
    await writeData(updatedOwners);
    return updatedOwner;
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
        pets: owner.pets.filter(p => p.id !== petId),
      };
      return updatedOwner;
    }
  });

  if (updatedOwner) {
    await writeData(updatedOwners);
    return updatedOwner;
  }

  throw new Error('Not found');
};
