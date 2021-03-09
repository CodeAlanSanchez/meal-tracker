/* eslint-disable import/no-unresolved */
import mealRoutes from './routes/meals';
import userRoutes from './routes/user';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use('/meals', mealRoutes);
app.use('/users', userRoutes);

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

declare let process : {
  env: {
    CONNECTION_URI: string,
    PORT: Number,
  }
};

const { CONNECTION_URI } = process.env || '';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true, auth: { authdb: 'admin' } })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error: any) => console.error(error));

mongoose.set('useFindAndModify', false);

app.use('/', (req: any, res: any) => {
  res.send('/');
});
