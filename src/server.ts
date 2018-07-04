import app from './app';
import { environment } from './environment';

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  environment.production = true;
} else {
  console.log('The server run in development mode!');
}

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});
