import 'regenerator-runtime/runtime';

import chai, { expect } from 'chai';
import chaiArrays from 'chai-arrays';

import { create, update, findById, findAll, remove } from '../src/DAL';

chai.use(chaiArrays);

describe('Data Access Layer', () => {
  describe('Read', () => {
    it('should list all pets', async () => {
      const pets = await findAll();
      expect(pets).to.be.array();
    });

    it('should be able retrieve a pet by id', async function () {
      const pets = await findAll();

      if (pets.length) {
        const pet = await findById(pets[0].id);

        if (!pet) {
          throw new Error();
        }
      } else {
        this.skip();
      }
    });
  });

  describe('Write', () => {
    it('should be able to add new pet', async () => {
      const petsList = await findAll();
      const newPet = await create({
        name: 'Spike',
        type: 'dog',
        age: 1,
        breed: 'Golden Retriever',
        colour: 'golden',
      });
      const updatedPetsList = await findAll();
      remove(newPet.id);

      if (
        petsList.length + 1 !== updatedPetsList.length ||
        !updatedPetsList.find((p) => p.id === newPet.id)
      ) {
        throw new Error();
      }
    });

    it('should correctly add new values', async () => {
      const name = 'Spike';
      const type = 'dog';
      const age = 1;
      const breed = 'Golden Retriever';
      const colour = 'golden';
      const newPet = await create({ name, type, age, breed, colour });
      remove(newPet.id);
      expect(newPet).to.have.property('name', name);
      expect(newPet).to.have.property('type', type);
      expect(newPet).to.have.property('age', age);
      expect(newPet).to.have.property('breed', breed);
      expect(newPet).to.have.property('colour', colour);
    });
  });

  describe('Update', () => {
    it('should update the passed key(s) only', async () => {
      const colour = 'Golden';
      const newPet = await create({
        name: 'Spike',
        type: 'dog',
        age: 1,
        breed: 'Golden Retriever',
        colour,
      });
      const name = 'Comet';
      const updatedPet = await update(newPet.id, { name });
      expect(updatedPet).to.have.property('name', name);
      expect(updatedPet).to.have.property('colour', colour);

      remove(newPet.id);
    });

    it('should throw "Not found" exception for a non-existing id', async () => {
      try {
        await update('non_existing_id', { name: 'Spike' });
      } catch (err) {
        expect(err.message).to.equal('Not found');
      }
    });
  });
});
