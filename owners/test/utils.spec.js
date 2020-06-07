import chai from 'chai';
import chaiUuid from 'chai-uuid';

import { readFile } from '../src/utils';

chai.use(chaiUuid);

describe('Utility', () => {
  describe('JSON Reader', () => {
    it('should be able to read a file from the file system', (done) => {
      readFile('data.json')
        .then(() => done())
        .catch(done);
    });

    it('should throw an exception if it fails to locate a file', (done) => {
      readFile('owners.json').catch(() => done());
    });
  });
});
