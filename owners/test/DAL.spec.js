import 'regenerator-runtime/runtime';

import chai, { expect } from 'chai';
import chaiArrays from 'chai-arrays';

import { findById, findAll, addPet } from '../src/DAL';

chai.use(chaiArrays);

describe('Data Access Layer', () => {
  describe('Read', () => {
    it('should list all owners', async () => {
      const owners = await findAll();
      expect(owners).to.be.array();
    });

    it('should be able retrieve an owner by id', async function() {
      const owners = await findAll();

      if (owners.length) {
        const owner = await findById(owners[0].id);

        if (!owner) {
          throw new Error();
        }
      } else {
        this.skip();
      }
    });
  });

  describe('Write', () => {
    it('should be able to add a pet to an owner', async () => {
      const owner = await addPet(
        '00000000-0000-0000-0000-000000000001',
        '10000000-0000-0000-0000-000000000001'
      );

      if (
        owner &&
        owner.pets.find(
          pet => pet.id === '10000000-0000-0000-0000-000000000001'
        )
      ) {
        return;
      }

      throw new Error();
    });
  });
});
