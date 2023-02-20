const express = require('express');
const app = express();

const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
