import fs from 'fs';
import { v4 as uuid } from 'uuid';

export const getUniqueId = uuid;

export const readFile = (path) =>
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
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      }

      resolve();
    })
  );
