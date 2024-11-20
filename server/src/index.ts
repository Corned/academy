import express from 'express';
import cookieparser from 'cookie-parser';
import authenticate from './middleware/authentication'

const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(authenticate);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});