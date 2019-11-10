import Logger from './Logger';
import { readFile, writeFile, getUniqueId } from './utils';

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

export const create = async body => {
  const pets = await readData();
  const newPet = {
    ...body,
    id: getUniqueId(),
  };
  await writeData([...pets, newPet]);
  return newPet;
};

export const remove = async id => {
  const pets = await readData();
  await writeData(pets.filter(pet => pet.id !== id));
};

export const update = async (id, body) => {
  const pets = await readData();
  let updatedPet = null;
  const updatedPets = pets.map(pet => {
    if (pet.id === id) {
      updatedPet = {
        ...pet,
        ...body,
        id,
      };
      return updatedPet;
    }

    return pet;
  });

  if (updatedPet) {
    await writeData(updatedPets);
    return updatedPet;
  }

  throw new Error('Not found');
};

export const findById = async id => {
  const pets = await readData();
  return pets.find(p => p.id === id);
};

export const findAll = readData;
