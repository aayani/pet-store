import fs from 'fs';
import request from 'request';

export const doPost = (url, body) =>
  new Promise((resolve, reject) => {
    request.post(url, { body }, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });

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
