import { createConnection } from 'typeorm';
import app from './app';
import { environment, getDBConf } from './environment';

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  environment.production = true;
} else {
  console.log('The server run in development mode!');
}

createConnection(getDBConf()).then(async connection =>  {
  app.listen(PORT, () => console.log('Express server listening on port ' + PORT));
}).catch(error => console.log('TypeORM connection error: ', error));
