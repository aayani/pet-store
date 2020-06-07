import fs from 'fs';
import axios from 'axios';

export const doPost = (url, data) =>
  new Promise((resolve, reject) =>
    axios({
      url,
      data,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  );

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
