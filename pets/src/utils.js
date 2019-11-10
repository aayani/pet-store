import fs from 'fs';
import uuid from 'uuid/v4';

export const getUniqueId = uuid;

export const readFile = path =>
  new Promise((resolve, reject) =>
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    })
  );

export const writeFile = (path, data) =>
  new Promise((resolve, reject) =>
    fs.writeFile(path, data, err => {
      if (err) {
        reject(err);
      }

      resolve();
    })
  );
