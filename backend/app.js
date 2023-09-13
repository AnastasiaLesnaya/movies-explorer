require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
// const cors = require('cors');
const helmet = require('helmet');
const cors = require('./middlewares/corsOptions');
// Защита сервера
const limiter = require('./middlewares/limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, MONGODB } = require('./utils/config');
const router = require('./routes/index');
const handleError = require('./middlewares/error');

const app = express();

mongoose.connect(MONGODB, {
  useNewUrlParser: true,
});

app.use(express.json());

/* const options = {
  origin: [
    'http://localhost:3000',
    'https://localhost:3000',
    'http://localhost:3001',
    'https://localhost:3001',
    'https://les.movies.nomoreparties.sbs',
    'http://les.movies.nomoreparties.sbs',

  ],
};

app.use('*', cors(options)); */

app.use(cors);

app.use(requestLogger);

app.use(helmet());

app.use(limiter);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(handleError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
