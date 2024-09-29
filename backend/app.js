const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const routes = require('./routes/index');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api', routes);

sequelize.sync().then(() => {
  console.log('Database synced');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
