import app from './src/app';
import Logger from './src/logger';

app.listen(3000, () =>
  Logger.info(
    `Server running on http://localhost:3000 in "${process.env.NODE_ENV}" mode`,
    'Server'
  )
);
