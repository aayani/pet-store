import chai, { expect } from 'chai';
import chaiJson from 'chai-json';
import chaiUuid from 'chai-uuid';

import { getUniqueId, readJson } from '../src/utils';

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
    it('should read JSON files', done => {
      readJson('data.json')
        .then(json => {
          expect(json).to.be.a.jsonObj();
          done();
        })
        .catch(done);
    });

    it('should throw an exception when it fails to locate a JSON files', done => {
      readJson('pets.json').catch(() => done());
    });
  });
});
