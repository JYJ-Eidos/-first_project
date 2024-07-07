const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const { routes } = require('./src/routes');
const { AppDataSource } = require('./src/models/dataSource');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use('/ping', (_, res) => {
  res.json({ message: 'pong' });
});

const server = () => {
  try {
    AppDataSource.initialize()
      .then(() => {
        console.log('data source has been initialize');
      })
      .catch((err) => {
        console.error(err);
      });
    app.listen(3000, () => {
      console.log(`server is listening on port 3000`);
    });
  } catch (err) {
    console.error(err);
  }
};

server();
