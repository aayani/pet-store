import fs from 'fs';
import uuid from 'uuid/v4';

export const getUniqueId = uuid;

export const readJson = path =>
  new Promise((resolve, reject) =>
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }

      try {
        resolve(JSON.parse(data.toString()));
      } catch (ex) {
        reject(ex);
      }
    })
  );
