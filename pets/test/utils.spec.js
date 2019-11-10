import chai, { expect } from 'chai';
import chaiJson from 'chai-json';
import chaiUuid from 'chai-uuid';

import { getUniqueId, readFile } from '../src/utils';

chai.use(chaiJson);
chai.use(chaiUuid);

describe('Utility functions', () => {
  describe('UUID Generator', () => {
    it('should generate v4 uuids', () => {
      const uuid = getUniqueId();
      expect(uuid).to.be.a.uuid('v4');
    });
  });

  describe('JSON Reader', () => {
    it('should be able to read files', done => {
      readFile('data.json')
        .then(() => done())
        .catch(done);
    });

    it('should throw an exception when it fails to locate a file', done => {
      readFile('pets.json').catch(() => done());
    });
  });
});
