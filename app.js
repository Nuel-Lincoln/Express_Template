require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const logger = require('./Utilities/logger');
const port = process.env.PORT;

// Apply middleware before defining routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, Express!, lets gooooooooooo!');
});

app.listen(port, () => {
  logger.info(`Server running at http://localhost:${port}`);
});
