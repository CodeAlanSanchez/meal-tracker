import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const { CONNECTION_URI } = process.env;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Server running on port ${PORT}`))
  .catch((error) => console.error(error));

mongoose.set('useFindAndModify', false);

app.use('/', (req, res) => {
  res.send('/');
});
