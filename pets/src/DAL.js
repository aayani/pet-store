import Logger from './Logger';
import { readJson, getUniqueId } from './utils';

let pets = [];

const loadData = async () => {
  try {
    pets = await readJson('data.json');
  } catch (err) {
    Logger.error(`${err.message}. Exiting now...`, 'FileReader');
    process.exit(0);
  }
};

loadData();

export const create = body => {
  const newPet = {
    ...body,
    id: getUniqueId(),
  };
  pets.push(newPet);
  return newPet;
};

export const findById = id => pets.find(p => p.id === id);

export const findAll = () => pets;
