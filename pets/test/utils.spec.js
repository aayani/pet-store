import chai, { expect } from 'chai';
import chaiUuid from 'chai-uuid';

import { getUniqueId, readFile } from '../src/utils';

chai.use(chaiUuid);

describe('Utility', () => {
  describe('UUID Generator', () => {
    it('should generate a valid v4 uuid', () => {
      const uuid = getUniqueId();
      expect(uuid).to.be.a.uuid('v4');
    });
  });

  describe('JSON Reader', () => {
    it('should be able to read a file from the file system', (done) => {
      readFile('data.json')
        .then(() => done())
        .catch(done);
    });

    it('should throw an exception if it fails to locate a file', (done) => {
      readFile('pets.json').catch(() => done());
    });
  });
});
